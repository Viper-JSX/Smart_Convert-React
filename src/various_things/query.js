import { currencyRatesRelativeToDollar } from "./currency_rates"

const allAvaliableSymbols = Object.keys(currencyRatesRelativeToDollar);
export const query = `https://api.apilayer.com/fixer/latest?base=USD&symbols=${allAvaliableSymbols.join(",")}`;
console.log(query)