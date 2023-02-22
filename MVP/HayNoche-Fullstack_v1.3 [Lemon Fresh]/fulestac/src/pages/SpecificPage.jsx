import React from 'react';
import {Helmet} from 'react-helmet';
import TopBar from "../components/header/TopBar";

import style from '../css/index/index.module.css';
import stylePage from "../css/specificpage/specificPage.module.css";

import CarruselHome from "../components/carrusel/CarruselHome";
import LaData from "../components/dataa/LaData";
import BottomBar from "../components/footer/BottomBar";


function SpecificPage(props) {
    return (
        <div className={style.back}>
            <Helmet>
                <title>Hay Noche</title>
            </Helmet>
            <div className={stylePage.biggest_kontainer}>
                <TopBar></TopBar>
                <CarruselHome></CarruselHome>

                <div className={stylePage.info_kontainer}>
                    <LaData></LaData>
                </div>
                <div className={stylePage.extra}></div>
            </div>
            <BottomBar></BottomBar>
        </div>

    );
}

export default SpecificPage;