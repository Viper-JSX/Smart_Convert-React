import { useSelector } from 'react-redux';
import { defaultCurrencyRatesRelativeToDollar } from '../../../various_things/default_currency_rates';

import CurrencySelect from "./Currency_select/Currency_select";

function CurrencyInput({ which, handleCurrencyChange, handleCurrencyQuantityChange }){

    const [currentPair, currentPairQuantity ] = useSelector((state) => [ state.currency.currentPair, state.currency.currentPairQuantity ]);
    const currentCurrencyValue = which === 1 ? currentPairQuantity[0] : currentPairQuantity[1];

    return(
        <div className="currencyInput">
            <CurrencySelect which={which} handleCurrencyChange={handleCurrencyChange} />
            <input type="number" placeholder="Quantity" value={currentCurrencyValue} onChange={(event) => handleCurrencyQuantityChange({ event, which })} />
            <br />
            <b className="currencyName">{ which === 1 ? defaultCurrencyRatesRelativeToDollar[currentPair[0]].name : defaultCurrencyRatesRelativeToDollar[currentPair[1]].name }</b>
        </div>
    )
}

export default CurrencyInput;