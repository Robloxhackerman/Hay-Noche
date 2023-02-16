import React from 'react';
import MaskGroupImage from '../assets/images/Promos_Mask_group.png';
import MaskGroup1Image from '../assets/images/Promos_Mask_group_1.png';
import MaskGroup2Image from '../assets/images/Promos_Mask_group_2.png';
import { styled } from '@mui/material/styles';

const Property1Slider1 = styled('div')({
  display: 'flex',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  width: '100%',
  height: '466px',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box',
  overflowX: 'scroll',
  '&::-webkit-scrollbar': {
    display: 'none'
  },
  overflowY: 'hidden',
  scrollSnapType: 'x mandatory',
  '& img': {
    width: '100%',
    height: '466px',
    objectFit: 'cover'
  }
});

const MaskGroup = styled('img')({
  height: '466px',
  width: '428px',
  position: 'absolute',
  left: '0px',
  top: '0px'
});

const MaskGroup1 = styled('img')({
  height: '466px',
  width: '428px',
  position: 'absolute',
  left: '428px',
  top: '0px'
});

const MaskGroup2 = styled('img')({
  height: '466px',
  width: '428px',
  position: 'absolute',
  left: '856px',
  top: '0px'
});

// Promo images go here, link database
function Promos (props) {
  return (
    <Property1Slider1 className={props.className}>
      <MaskGroup src={MaskGroupImage} loading='lazy' alt='Mask group' />
      <MaskGroup1 src={MaskGroup1Image} loading='lazy' alt='Mask group' />
      <MaskGroup2 src={MaskGroup2Image} loading='lazy' alt='Mask group' />
    </Property1Slider1>
  );
}

export default Promos;
