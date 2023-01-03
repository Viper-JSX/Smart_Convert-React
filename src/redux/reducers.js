import { combineReducers } from "redux";
import { CHANGE_CURRENCY_PAIR, CONVERT, HIDE_LOADING_WINDOW, SHOW_LOADING_WINDOW, UPDATE_CURRENCY_RATES_RELATIVE_TO_DOLLAR } from "./action_types";
import { defaultState } from "./default_state";

function currency(state=defaultState.currency, action){
    switch(action.type){
        case CHANGE_CURRENCY_PAIR:{
            if(action.payload.which === 1){ //which input changed it's currency
                return { ...state, currentPair: [ action.payload.currencyName, state.currentPair[1] ] };
            }
            
            return { ...state, currentPair: [ state.currentPair[0], action.payload.currencyName ] };
        }
        case CONVERT:{
            const pair1 = state.currentPair[0];
            const pair2 = state.currentPair[1];

            if(action.payload.which === 1){ //'which defines in which input the value was changed', first input was changed 
                const converted = Math.round( ((state.currencyRatesRelativeToDollar[pair1].rate / state.currencyRatesRelativeToDollar[pair2].rate) * (action.payload.quantity || 0)) * 1000) / 1000;
                return {...state, currentPairQuantity: [ action.payload.quantity, converted ]};
            }
            else if(action.payload.which === 2){ //second input was changed
                const converted = Math.round( ((state.currencyRatesRelativeToDollar[pair2].rate / state.currencyRatesRelativeToDollar[pair1].rate) * (action.payload.quantity || 0)) * 1000 ) / 1000;
                return {...state, currentPairQuantity: [ converted, action.payload.quantity ]};
            }
        }
        case UPDATE_CURRENCY_RATES_RELATIVE_TO_DOLLAR:{
            return {...state, currencyRatesRelativeToDollar: action.payload};
        }
        case SHOW_LOADING_WINDOW: {
            return { ...state, isLoading: true };
        }
        case HIDE_LOADING_WINDOW: {
            return { ...state, isLoading: false };
        }
        default:{
            return state;
        }
    }
}

export const rootReducer = combineReducers({currency});