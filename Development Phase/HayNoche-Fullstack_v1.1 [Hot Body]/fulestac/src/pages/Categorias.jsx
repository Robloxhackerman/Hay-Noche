import React from 'react';
import { Helmet } from 'react-helmet';
import { styled } from '@mui/material/styles';
import restaurantsSmall from '../assets/images/buttons/Category-Restaurantes-Small.png'
import baresSmall from '../assets/images/buttons/Category-Bares-Small.png'
import teatroSmall from '../assets/images/buttons/Category-Teatro-Small.png'
import musicaSmall from '../assets/images/buttons/Category-Musica-Small.png'
import eventosSmall from '../assets/images/buttons/Category-Eventos-Small.png'
import TopBar from "../components/header/TopBar";
import BottomBar from "../components/footer/BottomBar";
import styleno from "../css/index/index.module.css";

const Rectangle1 = styled('div')({
    backgroundColor: 'pink',
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'auto',
    left: '0px',
    top: '0px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: '5px',
    paddingBottom: '50px',
    marginTop: '80px'
});
const buttons = [
    { src: restaurantsSmall, alt: 'Restaurants', page: '/Restaurants' },
    { src: baresSmall, alt: 'Bares', page: 'Bares' },
    { src: teatroSmall, alt: 'Teatro', page: 'Teatros' },
    { src: musicaSmall, alt: 'Musica', page: 'Musica' },
    { src: eventosSmall, alt: 'Eventos', page: 'Eventos' }
];

const Botones = styled('a')({
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    backgroundColor: 'crimson',
    borderRadius: '10px',
    margin: '15px',
    width: '90%',
    textDecoration: 'none',
    color: 'white'
});

function Categorias (props) {
    return (
        <div className={styleno.back}>
            <Helmet>
                <title>Hay Noche</title>
            </Helmet>
            <TopBar> </TopBar>
        <Rectangle1>
            <Botones href='/Bares'>
                <h1> Bares </h1>
            </Botones>
            <Botones href='/Teatro'>
                <h1> Teatro </h1>
            </Botones>
            <Botones href='/Musica'>
                <h1> Musica </h1>
            </Botones>
            <Botones href='/Events'>
                <h1> Eventos </h1>
            </Botones>
            <Botones href='/Culturales'>
                <h1> Culturales </h1>
            </Botones>
            <Botones href='/Restaurants'>
                <h1> Restaurants </h1>
            </Botones>
        </Rectangle1>
            <BottomBar></BottomBar>
        </div>
    );
}

export default Categorias;
