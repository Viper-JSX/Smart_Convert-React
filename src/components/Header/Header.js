import { NavLink } from "react-router-dom";

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
        </header>
    );
}

export default Header;