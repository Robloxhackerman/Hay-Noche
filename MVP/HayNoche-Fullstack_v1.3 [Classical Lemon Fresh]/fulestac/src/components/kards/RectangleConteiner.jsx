import React from "react";
import { Helmet } from 'react-helmet';
import { styled } from '@mui/material/styles';


const RectangleConteinerStyle = styled('div')({
    backgroundColor: 'orange',
    height: '100%',
    width: '100%',
    position: "relative",
    marginTop: '80px',
    marginBottom: '80px',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    border: '2px solid black',
    boxSizing: 'border-box'
});

function RectangleConteiner (props) {

    return (
            <RectangleConteinerStyle>

            </RectangleConteinerStyle>

    );
}

export default RectangleConteiner;