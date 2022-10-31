import CurrencySelect from "./Currency_select/Currency_select";

function CurrencyInput({ which, handleCurrencyChange, handleCurrencyQuantityChange }){
    return(
        <div>
            <CurrencySelect which={which} handleCurrencyChange={handleCurrencyChange} />
            <input type="text" placeholder="Quantity" onChange={(event) => handleCurrencyQuantityChange({ event, which })} />
        </div>
    )
}

export default CurrencyInput;