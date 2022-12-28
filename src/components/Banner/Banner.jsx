import React from "react";
import "./bannerstyle.css"

const Banner = ({ location }) => {
    return (
        <div className={"banner_box" + location}>
            <p className="banner_para">
                Chez vous, partout et ailleurs
            </p>
        </div>
    );
};

export default Banner;