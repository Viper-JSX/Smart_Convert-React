import CurrencyInput from "./Currency_input/Currency_input";

function Converter(){
    return(
        <div id="converter">
            <h2>ConverterRR</h2>
            <CurrencyInput which="1" />
            <CurrencyInput which="2" />
        </div>
    );
}

export default Converter;