import { UPDATE_CURRENCIES_RATE_RELATIVE_TO_DOLLAR } from "./action_types";

export function changeCurrencyPair(){

}

export function convert(){

}

export function updateCurrenciesRate(payload){
    return { type: UPDATE_CURRENCIES_RATE_RELATIVE_TO_DOLLAR, payload };
}