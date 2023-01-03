import { useSelector } from "react-redux";

function CurrencySelect({ which, handleCurrencyChange }){
    const currencyNames = useSelector((state) => Object.keys(state.currency.currencyRatesRelativeToDollar));
    const [ currentPair, currentPairQuantity ] = useSelector((state) => [ state.currency.currentPair, state.currency.currentPairQuantity ]);

    return(
        <select className="currencySelect" value={which === 1 ? currentPair[0] : currentPair[1]} onChange={(event) => handleCurrencyChange({ event, which, quantity: which === 1 ? currentPairQuantity[1] : currentPairQuantity[0]  })}>
            {
                currencyNames.map((name) => <option value={name} key={name} >{name}</option> )
            }
        </select>
    )
}

export default CurrencySelect;