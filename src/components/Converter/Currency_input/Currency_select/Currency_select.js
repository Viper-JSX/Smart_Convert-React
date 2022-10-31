import { useSelector } from "react-redux";

function CurrencySelect(){
    const currencyNames = useSelector((state) => Object.keys(state.currency.currencyRatesRelativeToDollar));
    
    return(
        <div>

        </div>
    )
}

export default CurrencySelect;