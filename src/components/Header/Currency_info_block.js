import { useSelector } from "react-redux";

function CurrencyInfoBlock({ currencies = [] }){
    const defaultCurrencyRatesRelativeToDollar = useSelector((state) => state.defaultCurrencyRatesRelativeToDollar);

    return(
        <div className="currencyInfoBlock">
            <table>
                <thead>
                    <tr>
                        {
                            
                        }
                    </tr>
                </thead>

                <tbody>
                    <tr>

                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CurrencyInfoBlock;