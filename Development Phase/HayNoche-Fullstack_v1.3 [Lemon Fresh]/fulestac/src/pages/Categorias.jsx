import React from 'react';
import {Helmet} from 'react-helmet';

import TopBar from "../components/header/TopBar";
import BottomBar from "../components/footer/BottomBar";

import style from "../css/index/index.module.css";
import styleCat from '../css/page_categorias/categoria.module.css'

import bares from '../assets/icons/coctel.png'
import teatro from '../assets/icons/teatro.png'
import musica from '../assets/icons/nota-musical.png'
import eventos from '../assets/icons/partido.png'
import cultural from '../assets/icons/museo.png'
import restaurant from '../assets/icons/comida.png'


function Categorias(props) {
    return (
        <div className={style.back}>
            <Helmet>
                <title>HayNoche - Categorias</title>
            </Helmet>
            <TopBar> </TopBar>
            <div className={styleCat.categorias_container}>
                {/* Boton */}
                <div className={styleCat.btn_container}>
                    <a href='/Bares' className={styleCat.btn_link}>
                        <div className={styleCat.btn_back}>
                            <div className={styleCat.btn_border}>
                                <div className={styleCat.btn}>
                                    <div className={styleCat.btn_icon}>
                                        <img src={bares}/>
                                    </div>
                                    <div className={styleCat.btn_text}>
                                        <h1> Bares </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* Boton */}
                <div className={styleCat.btn_container}>
                    <a href='/Teatro' className={styleCat.btn_link}>
                        <div className={styleCat.btn_back}>
                            <div className={styleCat.btn_border}>
                                <div className={styleCat.btn}>
                                    <div className={styleCat.btn_icon}>
                                        <img src={teatro}/>
                                    </div>
                                    <div className={styleCat.btn_text}>
                                        <h1> Teatro </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* Boton */}
                <div className={styleCat.btn_container}>
                    <a href='/Musica' className={styleCat.btn_link}>
                        <div className={styleCat.btn_back}>
                            <div className={styleCat.btn_border}>
                                <div className={styleCat.btn}>
                                    <div className={styleCat.btn_icon}>
                                        <img src={musica}/>
                                    </div>
                                    <div className={styleCat.btn_text}>
                                        <h1> Musica </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* Boton */}
                <div className={styleCat.btn_container}>
                    <a href='/Events' className={styleCat.btn_link}>
                        <div className={styleCat.btn_back}>
                            <div className={styleCat.btn_border}>
                                <div className={styleCat.btn}>
                                    <div className={styleCat.btn_icon}>
                                        <img src={eventos}/>
                                    </div>
                                    <div className={styleCat.btn_text}>
                                        <h1> Eventos </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* Boton */}
                <div className={styleCat.btn_container}>
                    <a href='/Culturales' className={styleCat.btn_link}>
                        <div className={styleCat.btn_back}>
                            <div className={styleCat.btn_border}>
                                <div className={styleCat.btn}>
                                    <div className={styleCat.btn_icon}>
                                        <img src={cultural}/>
                                    </div>
                                    <div className={styleCat.btn_text}>
                                        <h1> Cultural </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* Boton */}
                <div className={styleCat.btn_container}>
                    <a href='/Restaurants' className={styleCat.btn_link}>
                        <div className={styleCat.btn_back}>
                            <div className={styleCat.btn_border}>
                                <div className={styleCat.btn}>
                                    <div className={styleCat.btn_icon}>
                                        <img src={restaurant}/>
                                    </div>
                                    <div className={styleCat.btn_text}>
                                        <h1> Restaurants </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <BottomBar></BottomBar>
        </div>
    );
}

export default Categorias;
