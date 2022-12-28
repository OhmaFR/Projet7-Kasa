import React, { useContext } from "react";
import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import { NavLink } from "react-router-dom";
import { Usercontext } from "../App";
import Footer from "../components/Footer/Footer";

const Home = () => {
    // Context import (datas)
    const data = useContext(Usercontext);

    return (
        <div>
            <main className="main_things_card">
                <Header />
                <Banner location="-home" />
                <section>
                    <div className="card_container">
                        {data.map((lodging, index) => (
                            <NavLink key={index} to={`/lodging/${lodging.id}`}>
                                <Card key={index} lodging={lodging} />
                            </NavLink>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;