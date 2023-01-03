import { useSelector } from "react-redux";

function CurrencySelect({ which, handleCurrencyChange }){
    const currencyNames = useSelector((state) => Object.keys(state.currency.currencyRatesRelativeToDollar));
    const [currentPairQuantity] = useSelector((state) => [state.currency.currentPairQuantity]);

    return(
        <select className="currencySelect" onChange={(event) => handleCurrencyChange({ event, which, quantity: which === 1 ? currentPairQuantity[1] : currentPairQuantity[0]  })}>
            {
                currencyNames.map((name) => <option value={name} >{name}</option> )
            }
        </select>
    )
}

export default CurrencySelect;