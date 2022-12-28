import React from "react";
import footerLogo from "../../images/logoBlanc.png";
import "./footerstyle.css"

const Footer = () => {
    return (
        <footer>
            <div className="footer_container">
                <img src={footerLogo} alt="logo du footer" />
                <p className="footer_p">&#xA9; 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;