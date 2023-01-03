import { Route, Routes } from "react-router";

import Header from "./Header/Header";
import Converter from "./Converter/Converter";
import DonationPage from "./Donation_page/Donation_page";
import About from "./About/About";
import LoadingWindow from "./Loading_window/Loading_window";
import { useSelector } from "react-redux";


function Layout({ handleCurrencyChange, handleCurrencyQuantityChange }){
    const isLoading = useSelector((state) => state.currency.isLoading);

    return(
        <div id="layout">
            <Header />
            <Routes>
                <Route path="/" element={<Converter handleCurrencyChange={handleCurrencyChange} handleCurrencyQuantityChange={handleCurrencyQuantityChange} />} />
                <Route path="/donation" element={<DonationPage />} />
                <Route path="/about" element={<About />} />
            </Routes>

            {
                isLoading ? 
                <LoadingWindow />
                :
                null
            }
        </div>
    );
}

export default Layout;