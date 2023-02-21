import React from 'react';
import { Helmet } from 'react-helmet';
import { styled } from '@mui/material/styles';
import VerticalFlyerScroll from "../buttons/VerticalFlyerScroll";
import Flyers from '../../css/flyers/Flyers.css'
import Res1 from '../../assets/images/portadas/bar_de_carnes.jpeg';
import Res2 from '../../assets/images/portadas/la_fabrica_bar.jpeg';
import Res3 from '../../assets/images/portadas/alba.jpeg';
import Res4 from '../../assets/images/portadas/mbc_pocitos.jpeg';

const Rectangle1 = styled('div')({
    backgroundColor: 'rgba(13, 12, 19, 0.8)',
    position: 'relative',
    left: '0px',
    top: '0px'
});
const businesses = [
    { image: Res1, name: 'Res1', page: 'SpecificPage', id: "bardecarnes"},
    { image: Res2, name: 'Res2', page: 'SpecificPage', id: "lafabricabar"},
    { image: Res3, name: 'Res3', page: 'SpecificPage', id: "alba"},
    { image: Res4, name: 'Res4', page: 'SpecificPage', id: "mbcpocitos" }
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
