import { convert } from "./action_creators";
import { CHANGE_CURRENCY_PAIR } from "./action_types";

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