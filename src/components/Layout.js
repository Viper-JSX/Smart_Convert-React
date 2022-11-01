import { Route, Routes } from "react-router";
import Converter from "./Converter/Converter";
import DonationPage from "./Donation_page/Donation_page";
import Header from "./Header/Header";

function Layout({ handleCurrencyChange, handleCurrencyQuantityChange }){
    return(
        <div id="layout">
            <Header />
            <Routes>
                <Route path="/" element={<Converter handleCurrencyChange={handleCurrencyChange} handleCurrencyQuantityChange={handleCurrencyQuantityChange} />} />
                <Route path="/donation" element={<DonationPage />} />
                <Route path="/about" element={<h2>About</h2>} />
            </Routes>
        </div>
    );
}

export default Layout;