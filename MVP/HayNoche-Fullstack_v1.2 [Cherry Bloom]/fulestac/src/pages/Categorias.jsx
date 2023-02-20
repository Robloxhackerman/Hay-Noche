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
    display: 'flex',
    height: '80%',
    width: '100%',
    flexDirection: 'column',
    marginTop: '74px',
    marginBottom: '80px',
    backgroundColor: 'lime'
});
const buttons = [
    { src: restaurantsSmall, alt: 'Restaurants', page: '/Restaurants' },
    { src: baresSmall, alt: 'Bares', page: 'Bares' },
    { src: teatroSmall, alt: 'Teatro', page: 'Teatros' },
    { src: musicaSmall, alt: 'Musica', page: 'Musica' },
    { src: eventosSmall, alt: 'Eventos', page: 'Eventos' }
];

const ButtonContainer= styled('a')({
    backgroundColor: 'orange',
    height: '100%',
    width: '100%',
    position: "center",
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    border: '2px solid black',
    boxSizing: 'border-box',
    textAlign: 'center'
});

const Botones = styled('a')({
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    textAlign: 'center',
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "yellow"
});

function Categorias (props) {
    return (
        <div className={styleno.back}>
            <Helmet>
                <title>Hay Noche</title>
            </Helmet>
            <TopBar> </TopBar>
        <Rectangle1>
            {/* Boton */}
            <ButtonContainer>
                <Botones href='/Bares'>
                    <h1> Bares </h1>
                </Botones>
            </ButtonContainer>
            {/* Boton */}
            <ButtonContainer>
                <Botones href='/Teatro'>
                    <h1> Teatro </h1>
                </Botones>
            </ButtonContainer>
            {/* Boton */}
            <ButtonContainer>
                <Botones href='/Musica'>
                    <h1> Musica </h1>
                </Botones>
            </ButtonContainer>
            {/* Boton */}
            <ButtonContainer>
                <Botones href='/Events'>
                    <h1> Eventos </h1>
                </Botones>
            </ButtonContainer>
            {/* Boton */}
            <ButtonContainer>
                <Botones href='/Culturales'>
                    <h1> Culturales </h1>
                </Botones>
            </ButtonContainer>
            {/* Boton */}
            <ButtonContainer>
                <Botones href='/Restaurants'>
                    <h1> Restaurants </h1>
                </Botones>
            </ButtonContainer>

        </Rectangle1>
            <BottomBar></BottomBar>
        </div>
    );
}

export default Categorias;
