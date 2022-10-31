import CurrencySelect from "./Currency_select/Currency_select";

function CurrencyInput({ which }){
    return(
        <div>
            <CurrencySelect which={which} />
            <input type="text" placeholder="Quantity" />
        </div>
    )
}

export default CurrencyInput;