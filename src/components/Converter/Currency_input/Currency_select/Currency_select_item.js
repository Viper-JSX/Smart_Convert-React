import { useSelector } from 'react-redux';

function CurrencySelectItem({ currencyName, which, handleCurrencyChange }){
    
    const [currentPair, currentPairQuantity] = useSelector((state) => [state.currency.currentPair, state.currency.currentPairQuantity]);
    let isSelected = ( (which === 1 && currencyName === currentPair[0]) || (which === 2 && currencyName === currentPair[1]) );

    return(
        <li className={`${isSelected ? "selected" : ""}`} onClick={() => handleCurrencyChange({currencyName, which, quantity: which === 1 ? currentPairQuantity[1] : currentPairQuantity[0] })}>{currencyName}</li>
    );
}

export default CurrencySelectItem;