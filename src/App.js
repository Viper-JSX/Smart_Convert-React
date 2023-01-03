import './css/main.css';

import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { useRef } from 'react';

import Layout from "./components/Layout";
import { convert } from "./redux/action_creators";
import { changeCurrencyPair, updateCurrencyRates } from "./redux/thunks";

import { defaultCurrencyRatesRelativeToDollar } from "./various_things/default_currency_rates";
import { query } from './various_things/query';

//'which' is The prop which is used to distinguish between two CurrencyInputs

function App(){
    const dispatch = useDispatch();
    const loadingWindowRef = useRef();

    useEffect(() => {
        dispatch(updateCurrencyRates({ query, defaultCurrencyRatesRelativeToDollar }));

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

    function handleCurrencyChange({event, quantity, which}){
        console.log(event.target.value, quantity, which)
        dispatch(changeCurrencyPair({ currencyName: event.target.value, quantity, which }))
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