import React from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';
import {styled} from '@mui/material/styles';

import stylePage from '../css/index/index.module.css';
import styleBtnGeneral from '../css/index/Buttons/ButtonGeneral.module.css'

import TopBar from "../components/header/TopBar";
import CarruselHome from "../components/carrusel/CarruselHome";
import BottomBar from "../components/footer/BottomBar";

import styleCat from "../css/index/Buttons/ButtonGeneral.module.css";

function Index() {
    return ( //contenedor padre
        <div className={stylePage.back}>
            <Helmet>
                <title>Inicio</title>
            </Helmet>
            <TopBar/>
            <div className={stylePage.main}>
                <CarruselHome></CarruselHome>
                <div className={stylePage.nav_container}>
                    <div className={stylePage.btn_container}>
                        <a href='/Categorias' className={styleCat.btn_link}>
                            <div className={styleCat.btn_back}>
                                <div className={styleCat.btn_border}>
                                    <div className={styleCat.btn}>
                                        <div className={styleCat.btn_text}>
                                            <h1> Categorias </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href='/Everything' className={styleCat.btn_link}>
                            <div className={styleCat.btn_back}>
                                <div className={styleCat.btn_border}>
                                    <div className={styleCat.btn}>
                                        <div className={styleCat.btn_text}>
                                            <h1> Todo </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={stylePage.search_container}>
                        <input className={stylePage.search_bar} placeholder="Buscar..."></input>
                    </div>
                </div>
            </div>
            <BottomBar></BottomBar>
        </div>
    );
}

export default Index;