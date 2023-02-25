import React from 'react';
import { Helmet } from 'react-helmet';
import { styled } from '@mui/material/styles';
import TopBar from "../components/header/TopBar";
import BottomBar from "../components/footer/BottomBar";
import Fyler2 from "../assets/images/carrusel/Flyer2.jpg";
import Fyler3 from "../assets/images/carrusel/Flyer3.png";
import Fyler4 from "../assets/images/carrusel/Flyer4.jpg";
import HayMusica from "../components/musica/HayMusica";

const MegaDiv = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    marginTop: '70px',
    marginBottom: '60px',
})


const FlyerKontainer = styled('div')({
    backgroundColor: 'orange',
    height: '100%',
    width: '100%',
    position: "center",
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    border: '2px solid black',
    boxSizing: 'border-box'
});

const FlyerImg = styled('img')({
    height: '100%',
    width: '100%',
    objectFit: 'cover'
});

function Musica (props) {
    return (
        <div>
            <Helmet>
                <title>Hay Noche</title>
            </Helmet>
            <TopBar> </TopBar>
            <MegaDiv>
                <FlyerKontainer>
                    <HayMusica></HayMusica>
                </FlyerKontainer>

            </MegaDiv>
            <BottomBar> </BottomBar>
        </div>
    );
}

export default Musica;