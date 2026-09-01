import { NavLink } from "react-router";

function Header() {
    return (
        <>
        <header>
            <header-text>True Carry</header-text>
            <nav>
                <ul className="nav-list">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/bag">My Bag</NavLink></li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header; 