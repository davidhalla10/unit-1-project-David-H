import React from "react";

const Footer = () => {
    let thisYear = new Date().getFullYear();

    return (
        <footer>
            <footer-text>&copy; {thisYear} Halla Enterprises</footer-text>
        </footer>
    )
}

export default Footer;