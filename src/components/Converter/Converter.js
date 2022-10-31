import CurrencyInput from "./Currency_input/Currency_input";

function Converter({ handleCurrencyChange, handleCurrencyQuantityChange }){
    return(
        <div id="converter">
            <h2 id="converterTitle" className="title">Smart Convert</h2>
            <CurrencyInput which={1} handleCurrencyChange={handleCurrencyChange} handleCurrencyQuantityChange={handleCurrencyQuantityChange} />
            <CurrencyInput which={2} handleCurrencyChange={handleCurrencyChange} handleCurrencyQuantityChange={handleCurrencyQuantityChange} />
        </div>
    );
}

export default Converter;