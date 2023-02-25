import React, {useEffect, useState} from "react";
import axios from "axios";
import stylePage from "../../css/page_bares/bares.module.css";
import Kard from "../kards/Kard";

function HayNoche() {
    const [barresProfile, setBarresProfile] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchBarresProfile = () => {
        console.log("respondo");
        axios
            .get('http://localhost:8080/api/barres') // con localhost no le gusta andar
            .then(resp => {
                setBarresProfile(resp.data.content); // se carga la data
            });

    };
    console.log(barresProfile)
    useEffect(() => {
        fetchBarresProfile();
        setIsLoading(false); // con esto sabes que terminaron de cargar
    }, []); // this [] is for if any changesa rise, it will update

    function renderLoading() {
        return (
            <div className="container w-full h-full flex items-center justify-center">
                <div className="animate-spin w-min h-min">
                </div>
            </div>
        );
    }

    return (
        <div className={stylePage.biggest_kontainer}>

            {isLoading
                ? renderLoading()
                : barresProfile.map((k, index) => {

                    return (
                        <div
                            key={k.barres_id}
                        >
                            <div>

                                <div className={stylePage.kard_kontainer_B}>
                                    <Kard
                                        name={k.barResName}
                                        timeOpens={k.barResOpens}
                                        timeCloses={k.barResCloses}
                                        adress={k.barResAdress}
                                        dayOpens={k.barResDayOpens}
                                        dayCloses={k.barResDayCloses}
                                        url={k.barResFotoId}
                                    ></Kard>
                                </div>
                            </div>
                        </div>
                    );
                })}
            <div className={stylePage.joker}></div>
        </div>
    );
}

export default HayNoche