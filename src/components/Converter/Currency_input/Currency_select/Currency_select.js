import { useSelector } from "react-redux";
import CurrencySelectItem from "./Currency_select_item";

function CurrencySelect({ which, handleCurrencyChange }){
    const currencyNames = useSelector((state) => Object.keys(state.currency.currencyRatesRelativeToDollar));
    return(
        <div className="currencySelect">
            {
                currencyNames.map((name) => <CurrencySelectItem currencyName={name} which={which} key={`${name}_currency_select_item`} handleCurrencyChange={handleCurrencyChange} />)
            }
        </div>
    )
}

export default CurrencySelect;