import { combineReducers } from "redux";
import { CHANGE_CURRENCY_PAIR, CHANGE_CURRENT_PAIR_QUANTITY, UPDATE_CURRENCY_RATES_RELATIVE_TO_DOLLAR } from "./action_types";

function currency(state={currentPair: ["usd", "eur"], currentPairQuantity: [0, 0], currencyRatesRelativeToDollar: {}}, action){
    switch(action.type){
        case CHANGE_CURRENCY_PAIR:{
            console.log(CHANGE_CURRENCY_PAIR);
            return state;
        }
        case CHANGE_CURRENT_PAIR_QUANTITY:{
            console.log(CHANGE_CURRENT_PAIR_QUANTITY);
            return state;
        }
        case UPDATE_CURRENCY_RATES_RELATIVE_TO_DOLLAR:{
            console.log(UPDATE_CURRENCY_RATES_RELATIVE_TO_DOLLAR, state);

            return {...state, currencyRatesRelativeToDollar: action.payload};
        }
        default:{
            return state;
        }
    }
}

export const rootReducer = combineReducers({currency});