import { useState } from 'react';
import { useSelector } from 'react-redux';

import CurrencySelect from "./Currency_select/Currency_select";

function CurrencyInput({ which, handleCurrencyChange, handleCurrencyQuantityChange }){
    const currentPairQuantity = useSelector((state) => state.currency.currentPairQuantity)
    //const [ currentCurrencyValue, setCurrentCurrencyValue ] = useState();
    const currentCurrencyValue = which === 1 ? currentPairQuantity[0] : currentPairQuantity[1];

    return(
        <div>
            <CurrencySelect which={which} handleCurrencyChange={handleCurrencyChange} />
            <input type="number" placeholder="Quantity" value={currentCurrencyValue} onChange={(event) => handleCurrencyQuantityChange({ event, which })} />
        </div>
    )
}

export default CurrencyInput;