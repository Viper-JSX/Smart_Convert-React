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

    //document.querySelector("body").onmouseover = function(){
    //    dispatch(convert({ quantity: 1, which: 1 })) //'which' defines which input was updated
    //}

    //document.querySelector("body").onclick = function(){
    //    dispatch(changeCurrencyPair({ currencyName: "uah", quantity: 1, which: 1 })) //'which' defines which input was updated
    //}

    function handleCurrencyChange(currencyName, quantity, which){
        console.log(currencyName, quantity, which);
    }

    function handleCurrencyQuantityChange({event, which}){
        //console.log(event, which);
        dispatch(convert({ quantity: parseFloat(event.target.value), which })) //'which' defines which input was updated
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