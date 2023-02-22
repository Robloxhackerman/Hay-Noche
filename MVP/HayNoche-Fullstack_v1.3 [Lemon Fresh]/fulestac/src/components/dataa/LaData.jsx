import React, {useEffect, useState} from "react";
import axios from "axios";
import {Helmet} from "react-helmet";
import {styled} from "@mui/material/styles";

import style from '../../css/dataa/data.module.css'

/*
const Rectangle1 = styled('div')({
    backgroundColor: 'rgba(13, 12, 19, 0.8)',
    width: '428px',
    height: '926px',
    position: 'absolute',
    left: '0px',
    top: '0px'
});

const Square1 = styled('div')({
    backgroundColor: 'white',
    backgroundImage: 'url(\'/assets/images/Flyer5.jpg\')',
    backgroundSize: 'cover',
    width: '428px',
    height: '486px',
    position: 'absolute',
    left: '0px',
    top: '82px'
});

const Name = styled('h1')({
    position: 'absolute',
    left: '20px',
    top: '580px',
    fontSize: '24px',
    margin: '0',
    padding: '0',
    color: 'white'
});

const Location = styled('h5')({
    position: 'absolute',
    right: '20px',
    top: '580px',
    fontSize: '16px',
    margin: '0',
    padding: '0',
    color: 'white'
});

const DaysOpen = styled('h5')({
    position: 'absolute',
    left: '20px',
    top: '610px',
    fontSize: '16px',
    margin: '0',
    padding: '0',
    color: 'white'
});

const Description = styled('div')({
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    top: '690px',
    width: '80%',
    fontSize: '16px',
    lineHeight: '1.5',
    textAlign: 'center',
    color: 'white'
});

const PricesImage = styled('img')({
    position: 'absolute',
    left: '15px',
    top: '630px',
    width: '50px'
});

const ButtonImage = styled('div')({
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    top: '800px',
    width: '250px'
});


const LaData = () => {
    const [barresProfiles, setBarresProfile] = useState([]);

    useEffect(() => {
        fetchBarresProfile();
    }, []); // this [] is for if any changes arise, it will update
    const fetchBarresProfile = () => {
        axios.get("http://localhost:5000/api/barres")
            .then(response => {
                setBarresProfile(response.data);
            });
    };

    const renderedData = barresProfiles.map((barresProfile, index) => {
        return (
            <div key={index}>
                <Helmet>
                    <title>Hay Noche</title>
                </Helmet>
                <Rectangle1>
                    <Square1 />
                    <Name className='nombre'>{barresProfile.barres_id}></Name>
                    <ButtonImage>
                    </ButtonImage>
                </Rectangle1>
            </div>
            );
    });
    return (renderedData.length === 0 ? <h1>Algo</h1> : renderedData);

};*/

function LaData() {
    return (
        <div className={style.data_container}>
            <div className={style.detailed_data_container}>
                <div>
                    <h1>Don Pepe</h1>
                </div>
            </div>
            <div className={style.detailed_data_container}>
                <div>
                    <h2></h2>
                </div>
            </div>
            <br/>
            <div className={style.detailed_data_container}>
                <div className={style.place_price_field}>
                    <h2>Precio</h2>
                    <div className={style.place_price_field_icon}>
                        <div className={style.price_icon}>
                            <h2 id="low">$</h2>
                        </div>
                        <div className={style.price_icon}>
                            <h2 id="medium">$</h2>
                        </div>
                        <div className={style.price_icon}>
                            <h2 id="high">$</h2>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <div className={style.detailed_data_container}>

            </div>
            <div className={style.detailed_data_container}>

            </div>
        </div>
    )
}

export default LaData;