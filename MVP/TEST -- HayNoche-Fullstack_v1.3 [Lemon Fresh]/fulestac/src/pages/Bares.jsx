import React, {useEffect, useState} from 'react';

import TopBar from "../components/header/TopBar";
import BottomBar from "../components/footer/BottomBar";
import Kard from "../components/kards/Kard";

import style from "../css/index/index.module.css";
import stylePage from '../css/page_bares/bares.module.css'
import axios from "axios";
import {Helmet} from "react-helmet";
import DenisseCambialo from "../components/bares/DenisseCambialo";
import styleCat from "../css/page_categorias/categoria.module.css";


function Bares() {
    return (
        <div className={style.back}>
            <Helmet>
                <title>Bares</title>
            </Helmet>
            <TopBar></TopBar>
            <div className={stylePage.nav_filtreishon}>
                <div className={styleCat.btn_container}>
                    <div className={styleCat.btn_back}>
                        <div className={styleCat.btn_border}>
                            <div className={stylePage.btn}>
                                <h1>CERVECERIA</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styleCat.btn_container}>
                    <div className={styleCat.btn_back}>
                        <div className={styleCat.btn_border}>
                            <div className={stylePage.btn}>
                                <h1>FAMILIAR</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styleCat.btn_container}>
                    <div className={styleCat.btn_back}>
                        <div className={styleCat.btn_border}>
                            <div className={stylePage.btn}>
                                <h1>GOURMAT</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styleCat.btn_container}>
                    <div className={styleCat.btn_back}>
                        <div className={styleCat.btn_border}>
                            <div className={stylePage.btn}>
                                <h1>HAMBURGUESERIAA</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styleCat.btn_container}>
                    <div className={styleCat.btn_back}>
                        <div className={styleCat.btn_border}>
                            <div className={stylePage.btn}>
                                <h1>JAPONES</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styleCat.btn_container}>
                    <div className={styleCat.btn_back}>
                        <div className={styleCat.btn_border}>
                            <div className={stylePage.btn}>
                                <h1>MEXICANA</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styleCat.btn_container}>
                    <div className={styleCat.btn_back}>
                        <div className={styleCat.btn_border}>
                            <div className={stylePage.btn}>
                                <h1>PARRILADA</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styleCat.btn_container}>
                    <div className={styleCat.btn_back}>
                        <div className={styleCat.btn_border}>
                            <div className={stylePage.btn}>
                                <h1>PARUANA</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styleCat.btn_container}>
                    <div className={styleCat.btn_back}>
                        <div className={styleCat.btn_border}>
                            <div className={stylePage.btn}>
                                <h1>PIZZERIA</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styleCat.btn_container}>
                    <div className={styleCat.btn_back}>
                        <div className={styleCat.btn_border}>
                            <div className={stylePage.btn}>
                                <h1>PUB</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styleCat.btn_container}>
                    <div className={styleCat.btn_back}>
                        <div className={styleCat.btn_border}>
                            <div className={stylePage.btn}>
                                <h1>STAND UP</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styleCat.btn_container}>
                    <div className={styleCat.btn_back}>
                        <div className={styleCat.btn_border}>
                            <div className={stylePage.btn}>
                                <h1>SUSHI</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styleCat.btn_container}>
                    <div className={styleCat.btn_back}>
                        <div className={styleCat.btn_border}>
                            <div className={stylePage.btn}>
                                <h1>TRAGOS</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <DenisseCambialo></DenisseCambialo>

            <BottomBar></BottomBar>
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