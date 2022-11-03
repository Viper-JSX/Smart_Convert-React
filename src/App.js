import './css/main.css';

import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import { useDispatch } from "react-redux";
import { useRef } from 'react';

import Layout from "./components/Layout";
import { convert, updateCurrenciesRate } from "./redux/action_creators";
import { changeCurrencyPair } from "./redux/thunks";

import { currencyRatesRelativeToDollar } from "./various_things/currency_rates";
import { query } from './various_things/query';

//'which' is The prop which is used to distinguish between two CurrencyInput`s

function App(){
    const dispatch = useDispatch();
    const loadingWindowRef = useRef();

    useEffect(() => {
        //window.addEventListener("load", handleAppLoad ); //load not triggering on mobile
        fetch(query, { headers: {apikey: "vl2Tc1djVFQSfijZCZZTHV0iNCfKMwJZ"} })
        .then((response) => response.json())
        .then((result) => {
            const rates = result.rates;
            for(const cur in rates){
                currencyRatesRelativeToDollar[cur].rate = 1/rates[cur]; //1/rates[cur] defines rate relative to dollar, it`s done for compatibility with app logic
            }
            dispatch(updateCurrenciesRate(currencyRatesRelativeToDollar));
        })
        .catch(() => dispatch(updateCurrenciesRate(currencyRatesRelativeToDollar))); //Setting default rates

        setTimeout(() => {
            loadingWindowRef.current.classList.add("hidden");
            setTimeout(() => loadingWindowRef.current.style.display = "none", 1000); //delay is equal to LoadingWindow transition time
        }, 3000)
    }, [])


    //function handleAppLoad(){  //load not triggering on mobile
    //    setTimeout(() => {
    //        loadingWindowRef.current.classList.add("hidden");
    //        setTimeout(() => loadingWindowRef.current.style.display = "none", 1000); //delay is equal to LoadingWindow transition time
    //    }, 3000)
    //}

    function handleCurrencyChange({currencyName, quantity, which}){
        dispatch(changeCurrencyPair({ currencyName, quantity, which }))
    }

    function handleCurrencyQuantityChange({event, which}){
        const quantity = ( parseFloat(event.target.value) || parseFloat(event.target.value) === 0 ) ? (Math.floor(parseFloat(event.target.value) * 100) / 100) : "";
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