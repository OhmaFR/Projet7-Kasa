import React, { useState } from "react";
import flchDroite from "../../images/flchDroite.svg";
import flchGauche from "../../images/flchGauche.svg";
import "./slideshowstyle.css"


const Slideshow = (data) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const previousPicture = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? data.data.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextPicture = () => {
        const isLastSlide = currentIndex === data.data.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };




    return (
        <div className="slideshow_box">
            {data.data.length > 1 && (
                <>
                    <img
                        src={flchGauche}
                        alt=""
                        className="slideshow_box_arrow flchGauche "
                        onClick={previousPicture}
                    />
                    <img
                        src={flchDroite}
                        alt=""
                        className="slideshow_box_arrow flchDroite"
                        onClick={nextPicture}
                    />
                </>
            )}
            <div className="slideshow_box_pictures">
                <img src={data.data[currentIndex]} alt="" />
            </div>
            <div className="slideshow_box_number">
                <p>{currentIndex + 1 + "/" + data.data.length}</p>
            </div>
        </div>
    );
};

export default Slideshow;