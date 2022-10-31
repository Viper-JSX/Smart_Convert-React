import { useSelector } from "react-redux";
import CurrencySelectItem from "./Currency_select_item";

function CurrencySelect(){
    
    return(
        <div>
            {
                currencyNames.map((name) => <CurrencySelectItem currencyName={name} key={`${name}_currency_select_item`} />)
            }
        </div>
    )
}

export default CurrencySelect;