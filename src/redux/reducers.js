import { combineReducers } from "redux";
import { CHANGE_CURRENCY_PAIR, CHANGE_QUANTITY_VALUE } from "./action_types";

function currency(state={currentPair: ["usd", "eur"], quantityValues: [0, 0]}, action){
    switch(action.type){
        case CHANGE_CURRENCY_PAIR:{
            console.log(CHANGE_CURRENCY_PAIR);
            return state;
        }
        case CHANGE_QUANTITY_VALUE:{
            console.log(CHANGE_QUANTITY_VALUE);
            return state;
        }
        default:{
            return state;
        }
    }
}

export const rootReducer = combineReducers({currency});