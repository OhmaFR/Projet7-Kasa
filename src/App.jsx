import React, {createContext, useEffect, useState} from "react";
import dataJson from "./data/data.json";
import { HashRouter } from "react-router-dom";
import RoutesApp from "./routes/RoutesApp";


export const Usercontext = createContext();


const App = () => {
    const [data, paramData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            paramData(dataJson);
        };
        fetchData();
    }, []);



    return (
        <HashRouter>
            <Usercontext.Provider value={data}>
                <RoutesApp />
            </Usercontext.Provider>
        </HashRouter>
    );
};



export default App;