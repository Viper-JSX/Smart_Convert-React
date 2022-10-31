import { combineReducers } from "redux";
import { CHANGE_CURRENCY_PAIR, CONVERT, UPDATE_CURRENCY_RATES_RELATIVE_TO_DOLLAR } from "./action_types";

function currency(state={currentPair: ["eur", "usd"], currentPairQuantity: [0, 0], currencyRatesRelativeToDollar: {}}, action){
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
                const converted = (state.currencyRatesRelativeToDollar[pair1].relativeToDollar / state.currencyRatesRelativeToDollar[pair2].relativeToDollar) * action.payload.quantity;
                console.log("converted:", pair1, state.currentPairQuantity[0], "->", pair2, state.currentPairQuantity[1], state.currentPair, state.currentPairQuantity )
                return {...state, currentPairQuantity: [ action.payload.quantity, converted ]};
            }
            else if(action.payload.which === 2){ //second input was changed
                const converted = (state.currencyRatesRelativeToDollar[pair2].relativeToDollar / state.currencyRatesRelativeToDollar[pair1].relativeToDollar) * action.payload.quantity;
                console.log("converted:", pair1, state.currentPairQuantity[0], "->", pair2, state.currentPairQuantity[1], state.currentPair, state.currentPairQuantity )
                return {...state, currentPairQuantity: [ converted, action.payload.quantity ]};
            }
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