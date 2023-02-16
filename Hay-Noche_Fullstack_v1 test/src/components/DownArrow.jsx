import React from 'react';
import VectorImage from '../assets/images/DownArrow.png';
import { styled } from '@mui/material/styles';

const SizeLarge = styled('div')({
  display: 'flex',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  width: '100%',
  height: '26px',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box'
});

const Vector = styled('img')({
  height: '10px',
  width: '20px',
  position: 'absolute',
  left: '16px',
  top: '19px'
});

function DownArrow (props) {
  return (
    <SizeLarge className={props.className}>
      <Vector src={VectorImage} loading='lazy' alt='Vector' />
    </SizeLarge>
  );
}

export default DownArrow;
