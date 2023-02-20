import React from 'react';
import { Helmet } from 'react-helmet';
import { styled } from '@mui/material/styles';
import TopBar from "../components/header/TopBar";
import BottomBar from "../components/footer/BottomBar";

function Culturales (props) {
    return (
        <div>
            <Helmet>
                <title>Hay Noche</title>
            </Helmet>
            <TopBar> </TopBar>
            <div>
                holis
            </div>
            <BottomBar> </BottomBar>
        </div>
    );
}

export default Culturales;
