import React, {useEffect, useState} from 'react';

import TopBar from "../components/header/TopBar";
import BottomBar from "../components/footer/BottomBar";
import Kard from "../components/kards/Kard";

import style from "../css/index/index.module.css";
import stylePage from '../css/page_bares/bares.module.css'
import axios from "axios";
import {Helmet} from "react-helmet";
import DenisseCambialo from "../components/bares/DenisseCambialo";


function Bares() {
<<<<<<< Updated upstream
    const [barresProfile, setBarresProfile] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchBarresProfile = () => {
        console.log("respondo");
        axios
            .get('http://10.9.100.88:5000/api/barres') // con localhost no le gusta andar
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

=======
>>>>>>> Stashed changes
    return (
        <div>
            <Helmet>
                <title>Bares</title>
            </Helmet>
            <TopBar></TopBar>
            <DenisseCambialo></DenisseCambialo>

<<<<<<< Updated upstream

                            <div>

                                <TopBar></TopBar>

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

                            <BottomBar></BottomBar>
                        </div>
                    );
                })}
            <div className={stylePage.joker}></div>
=======
            <BottomBar></BottomBar>
>>>>>>> Stashed changes
        </div>
    )
}

/*function Restaurants (props) {
    const [barresProfile, setBarresProfile] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchBarresProfile = () => {
        console.log("respondo");
        axios
            .get('http://10.9.100.88:5000/api/barres') // con localhost no le gusta andar
            .then(resp => {
                setBarresProfile(resp.data); // se carga la data
            });

    };

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
        <BiggestKontainer> {isLoading
            ? renderLoading()
            : barresProfile.map((k, index) => {
                return (
                    <div
                        key={k.barres_id}
                    >
                        <Helmet>
                            <title>Hay Noche</title>
                        </Helmet>
                        <TopBar> </TopBar>

                        <KardKontainer>
                            <Kard/>
                            <KardSpacer></KardSpacer>

                        </KardKontainer>

                        <BottomBar> </BottomBar>
                    </div>
                );
            })}
        </BiggestKontainer>
    );
}
*/

export default Bares;