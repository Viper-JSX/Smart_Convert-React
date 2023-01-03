import { defaultCurrencyRatesRelativeToDollar } from "../various_things/default_currency_rates"

export const defaultState = {
    currency:{
        currentPair: ["EUR", "USD"], currentPairQuantity: [0, 0], 
        currencyRatesRelativeToDollar: defaultCurrencyRatesRelativeToDollar,
        isLoading: false
    }
}