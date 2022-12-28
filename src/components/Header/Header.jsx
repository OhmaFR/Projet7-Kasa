import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import "./headerstyle.css"

const Header = () => {
    return (
        <header>
            <div className="nav_container">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="liens">
                    <nav>
                        <ul>
                            <NavLink
                                to="/"
                                className={(nav) => (nav.isActive ? "nav-active" : "")}
                                end
                            >
                                <li>Accueil</li>
                            </NavLink>
                            <NavLink
                                to="/about"
                                className={(nav) => (nav.isActive ? "nav-active" : "")}
                            >
                                <li>A Propos</li>
                            </NavLink>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;