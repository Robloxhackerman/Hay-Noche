import React from 'react';
import { Helmet } from 'react-helmet';
import { styled } from '@mui/material/styles';
import VerticalFlyerScroll from "../buttons/VerticalFlyerScroll";
import Flyers from '../../css/flyers/Flyers.css'
import Flyer2 from '../../assets/images/carrusel/Flyer2.jpg';
import Flyer3 from '../../assets/images/carrusel/Flyer3.png';
import Flyer4 from '../../assets/images/carrusel/Flyer4.jpg';
import Flyer5 from '../../assets/images/carrusel/Flyer5.jpg';


const Rectangle1 = styled('div')({
    backgroundColor: 'rgba(13, 12, 19, 0.8)',
    width: '428px',
    height: '926px',
    position: 'absolute',
    left: '0px',
    top: '0px'
});
const businesses = [
    { image: Flyer2, name: 'Restaurantes', page: '../Restaurants', id: '1' },
    { image: Flyer3, name: 'Bares', page: '../Bares' },
    { image: Flyer4, name: 'Teatro', page: '../Teatro' },
    { image: Flyer5, name: 'Musica', page: '../Musica' }
];

function FlyersEverything (props) {
    return (
        <div>
            <Helmet>
                <title>Hay Noche</title>
            </Helmet>
            <Rectangle1>
                <VerticalFlyerScroll businesses={businesses} />
            </Rectangle1>
        </div>
    );
}

export default FlyersEverything;
