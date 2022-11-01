import './css/main.css';

import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import { useDispatch } from "react-redux";
import { useRef } from 'react';

import Layout from "./components/Layout";
import { convert, updateCurrenciesRate } from "./redux/action_creators";
import { changeCurrencyPair } from "./redux/thunks";

import { defaultCurrencyRates } from "./various_things/default_currency_rates";

//The prop which is used to distinguish between two CurrencyInput`s

function App(){
    const dispatch = useDispatch();
    const loadingWindowRef = useRef();

    useEffect(() => {
        console.log(loadingWindowRef)
        window.addEventListener("load", handleAppLoad );
        dispatch(updateCurrenciesRate(defaultCurrencyRates));
    }, [])

    function handleAppLoad(){
        setTimeout(() => {
            document.getElementById("loadingWindow").classList.add("hidden");
        }, 3000)
    }

    function handleCurrencyChange({currencyName, quantity, which}){
        console.log(currencyName, quantity, which);
        dispatch(changeCurrencyPair({ currencyName, quantity, which }))
    }

    function handleCurrencyQuantityChange({event, which}){
        const quantity = ( parseFloat(event.target.value) || parseFloat(event.target.value) === 0 ) ? parseFloat(event.target.value) : "";
        dispatch(convert({ quantity, which })) //'which' defines which input was updated
    }

    return(
        <div className="App">
            <Layout 
                loadingWindowRef={loadingWindowRef}
                handleCurrencyChange={handleCurrencyChange}
                handleCurrencyQuantityChange={handleCurrencyQuantityChange}
            />
        </div>
    );
}

export default App;