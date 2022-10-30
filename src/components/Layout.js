import { Route, Routes } from "react-router";
import Converter from "./Converter/Converter";
import Header from "./Header/Header";

function Layout(){
    return(
        <div id="layout">
            <Header />
            <Routes>
                <Route path="/" element={<Converter />} />
                <Route path="/donation" element={<h2>Donation</h2>} />
                <Route path="/about" element={<h2>About</h2>} />
            </Routes>
        </div>
    );
}

export default Layout;