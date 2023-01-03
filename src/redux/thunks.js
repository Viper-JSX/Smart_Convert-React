import { convert } from "./action_creators";
import { CHANGE_CURRENCY_PAIR, UPDATE_CURRENCY_RATES_RELATIVE_TO_DOLLAR } from "./action_types";

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
        console.log("thunk");
        
        fetch(payload.query, { headers: {apikey: "vl2Tc1djVFQSfijZCZZTHV0iNCfKMwJZ---"} })
        .then((response) => response.json())
        .then((result) => {
            const rates = result.rates || [];
            for(const cur in rates){
                payload.defaultCurrencyRatesRelativeToDollar[cur].rate = 1/rates[cur]; //1/rates[cur] defines rate relative to dollar, it`s done for compatibility with app logic
            }
            dispatch({ type: UPDATE_CURRENCY_RATES_RELATIVE_TO_DOLLAR, payload: payload.defaultCurrencyRatesRelativeToDollar });
        })
        .catch(() => console.log("Network Error") );//dispatch({ type: UPDATE_CURRENCY_RATES_RELATIVE_TO_DOLLAR, payload: payload.defaultCurrencyRatesRelativeToDollar })); //Setting default rates
    }
}