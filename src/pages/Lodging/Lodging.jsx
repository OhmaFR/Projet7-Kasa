import React, {useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Usercontext } from "../../App";
import Collapse from "../../components/Collapse/Collapse";
import Error from "../Error/Error";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Slideshow from "../../components/Slide/Slideshow";
import TagName from "../../components/tag/TagName";
import fullStar from "../../images/etoileRemplis.svg";
import emptyStar from "../../images/etoileVide.svg";
import "./lodgingstyle.css"




const Lodging = () => {
    const data = useContext(Usercontext);
    const urlId = useParams().id;
    const [lodgingData, setLodgingData] = useState({
        cover: "",
        description: "",
        equipments: [],
        host: { name: "", picture: "" },
        id: "",
        location: "",
        pictures: [],
        rating: "",
        tags: [],
        title: "",
    });

    // On cherche à utiliser les data de l'ID dans l'url//
    useEffect(() => {
        const pushData = async () => {
            let found = data.find((o) => o.id === urlId);
            await setLodgingData(found);
            window.scrollTo(0, 0);
        };
        pushData();});

    if (lodgingData === undefined) {
        return <Error />;
    }

    // On sépare nom et prénom dans nos data > host > name //
    let name = lodgingData.host.name.split(" ");

    return (
        <div>
            <div className="main_content">
                <Header />
                {lodgingData && (
                    <section>
                        <>
                            <Slideshow data={lodgingData.pictures} />
                            <div className="lodg_block">
                                <div className="lodg_block_infos">
                                    <div className="lodg_block_infos_item title-location">
                                        <h2>{lodgingData.title}</h2>
                                        <p>{lodgingData.location}</p>
                                    </div>
                                    <div className="lodg_block_infos_item tagName">
                                        {lodgingData.tags.map((tag, index) => {
                                            return <TagName tag={tag} key={index} />;
                                        })}
                                    </div>
                                </div>
                                <div className="lodg_block_infos flexBlock">
                                    <div className="lodg_block_infos_item hostInfos">
                                        <div className="host_name">
                                            <p>{name[0]}</p>
                                            <p>{name[1]}</p>
                                        </div>
                                        <div className="host_picture">
                                            <img src={lodgingData.host.picture} alt="host-pic" />
                                        </div>
                                    </div>
                                    <div className="lodg_block_infos_item rating">
                                        {lodgingData.rating == 1 && (
                                            <>
                                                <img src={fullStar} alt="rating-stars" />
                                                <img src={emptyStar} alt="rating-stars" />
                                                <img src={emptyStar} alt="rating-stars" />
                                                <img src={emptyStar} alt="rating-stars" />
                                                <img src={emptyStar} alt="rating-stars" />
                                            </>
                                        )}
                                        {lodgingData.rating == 2 && (
                                            <>
                                                <img src={fullStar} alt="rating-stars" />
                                                <img src={fullStar} alt="rating-stars" />
                                                <img src={emptyStar} alt="rating-stars" />
                                                <img src={emptyStar} alt="rating-stars" />
                                                <img src={emptyStar} alt="rating-stars" />
                                            </>
                                        )}
                                        {lodgingData.rating == 3 && (
                                            <>
                                                <img src={fullStar} alt="rating-stars" />
                                                <img src={fullStar} alt="rating-stars" />
                                                <img src={fullStar} alt="rating-stars" />
                                                <img src={emptyStar} alt="rating-stars" />
                                                <img src={emptyStar} alt="rating-stars" />
                                            </>
                                        )}
                                        {lodgingData.rating == 4 && (
                                            <>
                                                <img src={fullStar} alt="rating-stars" />
                                                <img src={fullStar} alt="rating-stars" />
                                                <img src={fullStar} alt="rating-stars" />
                                                <img src={fullStar} alt="rating-stars" />
                                                <img src={emptyStar} alt="rating-stars" />
                                            </>
                                        )}
                                        {lodgingData.rating == 5 && (
                                            <>
                                                <img src={fullStar} alt="rating-stars" />
                                                <img src={fullStar} alt="rating-stars" />
                                                <img src={fullStar} alt="rating-stars" />
                                                <img src={fullStar} alt="rating-stars" />
                                                <img src={fullStar} alt="rating-stars" />
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="collapse_box-lodging">
                                <Collapse
                                    label="Description"
                                    content={lodgingData.description}
                                />
                                <Collapse
                                    label="Équipements"
                                    content={
                                        <ul>
                                            {lodgingData.equipments.map((equipement, index) => {
                                                return <li className="lodg_equipement" key={index}>{equipement}</li>;
                                            })}
                                        </ul>
                                    }
                                />
                            </div>
                        </>
                    </section>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Lodging;