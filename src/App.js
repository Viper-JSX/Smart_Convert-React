import './css/main.css';

import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import { useDispatch } from "react-redux";
import { useRef } from 'react';

import Layout from "./components/Layout";
import { convert, updateCurrenciesRate } from "./redux/action_creators";
import { changeCurrencyPair } from "./redux/thunks";

import { currencyRatesRelativeToDollar } from "./various_things/currency_rates";

//The prop which is used to distinguish between two CurrencyInput`s

function App(){
    const dispatch = useDispatch();
    const loadingWindowRef = useRef();

    useEffect(() => {
        window.addEventListener("load", handleAppLoad );
        dispatch(updateCurrenciesRate(currencyRatesRelativeToDollar));
        
        fetch("https://api.apilayer.com/fixer/latest?base=USD&symbols=USD,EUR,UAH,GBP,HUF", { headers: {apikey: "vl2Tc1djVFQSfijZCZZTHV0iNCfKMwJZ"} })
        .then((response) => response.json())
        .then((result) => {
            console.log(result)
        })
    }, [])

    function handleAppLoad(){
        setTimeout(() => {
            loadingWindowRef.current.classList.add("hidden");
            setTimeout(() => loadingWindowRef.current.style.display = "none", 1000); //delay is equal to LoadingWindow transition time
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