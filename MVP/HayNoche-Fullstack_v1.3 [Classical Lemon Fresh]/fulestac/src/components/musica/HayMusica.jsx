import React, {useEffect, useState} from "react";
import axios from "axios";
import stylePage from "../../css/page_bares/bares.module.css";
import FlyerM from "./FlyerM"


function HayMusica() {
    const [musicaProfile, setMusicaProfile] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchMusicaProfile = () => {
        console.log("respondo");
        axios
            .get('http://Deployme-env.eba-9rppbtpf.us-east-1.elasticbeanstalk.com:5000/api/musica') // con localhost no le gusta andar
            .then(resp => {
                setMusicaProfile(resp.data); // se carga la data
            });

    };
    console.log(musicaProfile)
    useEffect(() => {
        fetchMusicaProfile();
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
                : musicaProfile.map((m, index) => {
                    return (
                        <div
                            key={m.mMusicaId}
                        >
                            <div>
                                <FlyerM
                                    url={m.mMusicaName}
                                    link={m.mMusicaLink}
                                ></FlyerM>
                            </div>
                        </div>
                    );
                })}
            <div className={stylePage.joker}></div>
        </div>
    );
}

export default HayMusica;