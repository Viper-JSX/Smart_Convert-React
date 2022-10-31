import { CHANGE_CURRENCY_PAIR, CONVERT, UPDATE_CURRENCY_RATES_RELATIVE_TO_DOLLAR } from "./action_types";

export function changeCurrencyPair(payload){
    return { type: CHANGE_CURRENCY_PAIR, payload }
}

export function convert(payload){
    return { type: CONVERT, payload };
}

export function updateCurrenciesRate(payload){
    return { type: UPDATE_CURRENCY_RATES_RELATIVE_TO_DOLLAR, payload};
}