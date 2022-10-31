import CurrencySelect from "./Currency_select/Currency_select";

function CurrencyInput(){
    return(
        <div>
            <CurrencySelect />
            <input type="text" placeholder="Quantity" />
        </div>
    )
}

export default CurrencyInput;