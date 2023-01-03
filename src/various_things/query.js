import { defaultCurrencyRatesRelativeToDollar } from "./default_currency_rates"

const allAvaliableSymbols = Object.keys(defaultCurrencyRatesRelativeToDollar);
export const query = `https://api.apilayer.com/fixer/latest?base=USD&symbols=${allAvaliableSymbols.join(",")}`;