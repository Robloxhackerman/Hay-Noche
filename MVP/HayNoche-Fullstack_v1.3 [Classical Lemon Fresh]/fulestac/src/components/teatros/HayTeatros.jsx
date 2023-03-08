import React, {useEffect, useState} from "react";
import axios from "axios";
import stylePage from "../../css/page_bares/bares.module.css";
import Flyer from "./Flyer"


function HayTeatros() {
    const [teatroProfile, setTeatroProfile] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchTeatroProfile = () => {
        console.log("respondo");
        axios
            .get('http://Deployme-env.eba-9rppbtpf.us-east-1.elasticbeanstalk.com:5000/api/teatro') // con localhost no le gusta andar
            .then(resp => {
                setTeatroProfile(resp.data); // se carga la data
            });

    };
    console.log(teatroProfile)
    useEffect(() => {
        fetchTeatroProfile();
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
                : teatroProfile.map((t, index) => {
                    return (
                        <div
                            key={t.tObraId}
                        >
                            <div>
                                <Flyer
                                    url={t.tObraName}
                                    link={t.tObraLink}
                                ></Flyer>
                            </div>
                        </div>
                    );
                })}
            <div className={stylePage.joker}></div>
        </div>
    );
}

export default HayTeatros;