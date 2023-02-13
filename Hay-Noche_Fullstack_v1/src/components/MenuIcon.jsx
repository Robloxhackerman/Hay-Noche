import React from 'react';
import VectorImage from '../assets/images/MenuIcon.png';
import { styled } from '@mui/material/styles';

const SizeLarge = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `24px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const Vector = styled('img')({
  height: `14px`,
  width: `20px`,
  position: `absolute`,
  left: `2px`,
  top: `5px`,
});

function MenuIcon(props) {
  return (
    <SizeLarge className={props.className}>
      <Vector src={VectorImage} loading="lazy" alt={'Vector'} />
    </SizeLarge>
  );
}

export default MenuIcon;
