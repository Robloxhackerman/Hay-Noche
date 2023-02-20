import React from 'react';
import { Helmet } from 'react-helmet';
import TopBar from "../components/header/TopBar";
import styleno from '../css/index/index.module.css';
import CarruselHome from "../components/carrusel/CarruselHome";
import LaData from "../components/dataa/LaData";

function SpecificPage (props) {
    return (
        <div>
            <div className={styleno.back}>
                <Helmet>
                    <title>Hay Noche</title>
                </Helmet>
                <TopBar className='top_bar'></TopBar>
                <CarruselHome></CarruselHome>
            </div>
            <div>
                <LaData></LaData>
            </div>
        </div>

    );
}
export default SpecificPage;