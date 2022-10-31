import { useSelector } from 'react-redux';

function CurrencySelectItem({ currencyName, which, handleCurrencyChange }){
    const currentPairQuantity = useSelector((state) => state.currency.currentPairQuantity);
    console.log(currentPairQuantity)

    return(
        <li onClick={() => handleCurrencyChange({currencyName, which, quantity: which === 1 ? currentPairQuantity[1] : currentPairQuantity[0] })}>{currencyName}</li>
    );
}

export default CurrencySelectItem;