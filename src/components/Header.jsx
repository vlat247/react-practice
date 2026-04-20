import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h1>InstaFap</h1>
            </Link>
            <nav>
                <Link to="/feed">FEED</Link>
                <a href="#">SUPPORT US</a>
                <a href="#">DONATE TO CHILDREN</a>
            </nav>
        </header>
    )
}

export default Header;