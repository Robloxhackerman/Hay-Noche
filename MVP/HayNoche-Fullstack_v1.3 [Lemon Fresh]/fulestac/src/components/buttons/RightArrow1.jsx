import React from 'react';
import VectorImage from '../../assets/images/buttons/RightArrow.png';
import { styled } from '@mui/material/styles';

const SizeLarge = styled('div')({
    display: 'flex',
    position: 'relative',
    isolation: 'isolate',
    flexDirection: 'row',
    width: '100%',
    height: '24px',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '0px',
    boxSizing: 'border-box',
    overflow: 'hidden'
});

const Vector = styled('img')({
    height: '20px',
    width: '10px',
    position: 'absolute',
    left: '8px',
    top: '5px'
});

function RightArrow (props) {
    return (
        <SizeLarge className={props.className}>
            <Vector src={VectorImage} loading='lazy' alt='Vector' />
        </SizeLarge>
    );
}

export default RightArrow;
