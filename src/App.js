import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import Layout from "./components/Layout";
import { convert, updateCurrenciesRate } from "./redux/action_creators";
import { changeCurrencyPair } from "./redux/thunks";

import { defaultCurrencyRates } from "./various_things/default_currency_rates";

//The prop which is used to distinguish between two CurrencyInput`s

function App(){
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(updateCurrenciesRate(defaultCurrencyRates));
    }, [])

    function handleCurrencyChange({currencyName, quantity, which}){
        console.log(currencyName, quantity, which);
        dispatch(changeCurrencyPair({ currencyName, quantity, which }))
    }

    function handleCurrencyQuantityChange({event, which}){
        const quantity = parseFloat(event.target.value) || 0;
        dispatch(convert({ quantity, which })) //'which' defines which input was updated, 0 in case if there is empty string
    }

    return(
        <div className="App">
            <Layout 
                handleCurrencyChange={handleCurrencyChange}
                handleCurrencyQuantityChange={handleCurrencyQuantityChange}
            />
        </div>
    );
}

export default App;