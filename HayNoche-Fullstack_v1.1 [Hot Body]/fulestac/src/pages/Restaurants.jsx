import React from 'react';
import { Helmet } from 'react-helmet';
import { styled } from '@mui/material/styles';
import TopBar from "../components/header/TopBar";
import BottomBar from "../components/footer/BottomBar";
import Kard from "../components/kards/Kard";

const KardKontainer = styled('div')({
    backgroundColor: 'orange',
    height: '100%',
    width: '100%',
    position: "relative",
    marginTop: '75px',
    marginBottom: '60px',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '2px solid black',
    boxSizing: 'border-box',
    gap: '9px',
    flexDirection: 'column'
});

const KardSpacer = styled('div')({
    backgroundColor: 'hotpink',
    height: '9px',
    width: '100%'
});

function Restaurants (props) {
    return (
        <div>
            <Helmet>
                <title>Hay Noche</title>
            </Helmet>
            <TopBar> </TopBar>
                <KardKontainer>
                    <Kard></Kard>
                    <KardSpacer></KardSpacer>
                    <Kard></Kard>
                    <KardSpacer></KardSpacer>
                    <Kard></Kard>
                    <KardSpacer></KardSpacer>
                    <Kard></Kard>
                    <KardSpacer></KardSpacer>
                    <Kard></Kard>
                </KardKontainer>

            <BottomBar> </BottomBar>
        </div>
    );
}

export default Restaurants;