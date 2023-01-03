import { convert } from "./action_creators";
import { CHANGE_CURRENCY_PAIR, HIDE_LOADING_WINDOW, SHOW_LOADING_WINDOW, UPDATE_CURRENCY_RATES_RELATIVE_TO_DOLLAR } from "./action_types";

export function changeCurrencyPair(payload){
    return function(dispatch){
        dispatch({ type: CHANGE_CURRENCY_PAIR, payload: { currencyName: payload.currencyName, which: payload.which } });

        if(payload.which === 1){ //if first`s input currency changed then it will be recalculated based on value of second input
            dispatch(convert({ quantity: payload.quantity, which: 2 }));
        }
        else{ //if second`s input currency changed then it will be recalculated based on value of first input
            dispatch(convert({ quantity: payload.quantity, which: 1 }));
        }
    }
}

export function updateCurrencyRates(payload){
    return function(dispatch){
        const actualCurrencyRatesRelativeToDollar = JSON.parse(JSON.stringify({...payload.defaultCurrencyRatesRelativeToDollar })); //JSON.parse and JSON.stringify were used to remove all the object references to avoid defaultCurrencyRatesRelativeToDollar mutation

        dispatch({ type: SHOW_LOADING_WINDOW });
        fetch(payload.query, { headers: {apikey: "vl2Tc1djVFQSfijZCZZTHV0iNCfKMwJZ-"} })
        .then((response) => response.json())
        .then((result) => {
            const rates = result.rates;
            if(rates){ //If result could not be get, then default rates will be used
                for(const cur in rates){
                    actualCurrencyRatesRelativeToDollar[cur].rate = 1/rates[cur]; //1/rates[cur] defines rate relative to dollar, it`s done for compatibility with app logic
                }
            }
            dispatch({ type: UPDATE_CURRENCY_RATES_RELATIVE_TO_DOLLAR, payload: actualCurrencyRatesRelativeToDollar });
            dispatch({ type: HIDE_LOADING_WINDOW });
        })
        .catch((error) => {
            console.log("Network Error", error); 
            dispatch({ type: HIDE_LOADING_WINDOW });
        });
    }
}