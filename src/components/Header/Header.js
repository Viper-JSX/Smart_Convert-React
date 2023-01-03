import { NavLink } from "react-router-dom";
import CurrencyInfoBlock from "./Currency_info_block";

function Header(){
    return(
        <header>
            <nav id="mainNavigation">
                <ul id="mainNavigationNavItems">
                    <NavLink to="/" end >Smart Convert</NavLink>
                    <NavLink to="donation" >Donation</NavLink>
                    <NavLink to="about" >About</NavLink>
                </ul>
            </nav>
            <CurrencyInfoBlock baseCurrency="USD" currencies={ ["EUR", "USD"] } />
        </header>
    );
}

export default Header;