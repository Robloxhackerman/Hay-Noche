import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import TopBar from "../components/header/TopBar";
import styleno from '../css/index/index.module.css';
import CarruselHome from "../components/carrusel/CarruselHome";
import BottomBar from "../components/footer/BottomBar";

const Categorias = styled('a')({
    color: 'white',
    position: 'relative',
    backgroundColor: '#8BE8CB',
    height: "60px",
    marginTop: '35px',
    border: '5px solid #7EA2AA',
    borderRadius: "25px",
    width: '83%',
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
    marginBottom: '3px',
    textDecoration: 'none'
});

const Todo = styled('a')({
    color: 'white',
    position: 'relative',
    height: '60px',
    backgroundColor: '#8BE8CB',
    border: '5px solid #7EA2AA',
    marginTop: '30px',
    borderRadius: "25px",
    width: '83%',
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
    textDecoration: 'none'
});

const Botones = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
});


function Index () {
    return ( //contenedor padre
        <div className={styleno.back}>
            <title>Hay Noche</title>
            <TopBar />
            <CarruselHome></CarruselHome>
            <Botones>
                <Categorias href='/Categorias'>
                    <h1> CATEGORIAS > </h1>
                </Categorias>
                <Todo href='/Everything'>
                    <h1> TODO ></h1>
                </Todo>
            </Botones>
            <BottomBar></BottomBar>
        </div>
    );
}

export default Index;