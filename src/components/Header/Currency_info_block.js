import { useSelector } from "react-redux";

function CurrencyInfoBlock({ baseCurrency = "UAH", currencies = [] }){
    const currencyRatesRelativeToDollar = useSelector((state) => state.currency.currencyRatesRelativeToDollar);

    return(
        <div className="currencyInfoBlock">

            {
                currencyRatesRelativeToDollar ? 
                <table className="ratesInfo">
                    <thead>
                        <tr>
                            {
                                currencies.map((currency) => <td key={currency}>{currency}</td>)
                            }
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            {
                                currencies.map((currency) => 
                                    <td key={currency}>
                                        { 
                                            (currencyRatesRelativeToDollar[currency].rate / currencyRatesRelativeToDollar[baseCurrency].rate).toFixed(2)
                                        }
                                    </td>
                                )
                            }
                        </tr>
                    </tbody>
                </table>
                :
                null
            }
        </div>
    );
}

export default CurrencyInfoBlock;