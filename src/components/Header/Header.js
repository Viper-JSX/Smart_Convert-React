import { NavLink } from "react-router-dom";

function Header(){
    return(
        <header>
            <nav>
                <ul>
                    <NavLink to="/" >Smart Convert</NavLink>
                    <NavLink to="/donation" >Donation</NavLink>
                    <NavLink to="/about" >About</NavLink>
                </ul>
            </nav>
        </header>
    );
}

export default Header;