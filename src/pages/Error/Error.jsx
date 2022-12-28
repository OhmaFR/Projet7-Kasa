import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./errorstyle.css"




const Error = () => {
    return (
        <div className="err_page">
            <Header />
            <div className="err_block">
                <div className="err_box">
                    <p className="err_number">404</p>
                    <p className="err_message">
                        Oups ! La page que vous demandez n'existe pas.
                    </p>
                </div>
                <NavLink to="/">
                    <div className="err_liens">
                        <p>Retournez sur la page d'accueil</p>
                    </div>
                </NavLink>
            </div>
            <Footer />
        </div>
    );
};

export default Error;