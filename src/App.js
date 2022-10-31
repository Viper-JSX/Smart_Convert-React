import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import Layout from "./components/Layout";
import { updateCurrenciesRate } from "./redux/action_creators";

import { defaultCurrencyRates } from "./various_things/default_currency_rates";

function App(){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateCurrenciesRate(defaultCurrencyRates));
    }, [])

    return(
        <div className="App">
            <Layout />
        </div>
    );
}

export default App;