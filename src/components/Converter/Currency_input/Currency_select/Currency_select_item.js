function CurrencySelectItem({ currencyName, which, handleCurrencyChange }){
    return(
        <div onClick={() => handleCurrencyChange({currencyName, which, quantity: 1 })}>{currencyName}</div>
    );
}

export default CurrencySelectItem;