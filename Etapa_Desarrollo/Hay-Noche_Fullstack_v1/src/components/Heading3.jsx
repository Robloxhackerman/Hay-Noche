import React from 'react';
import { styled } from '@mui/material/styles';

const Heading4 = styled('div')({
  backgroundColor: 'rgba(13, 12, 19, 0.8)',
  display: 'flex',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  width: '100%',
  height: '30px',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  overflow: 'hidden'
});

const PageItems = styled('div')({
  display: 'flex',
  position: 'absolute',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  left: '278px',
  top: '19px'
});

const Title = styled('div')({
  display: 'flex',
  position: 'absolute',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  left: '16px',
  top: '26px'
});

const LogoImage = styled('img')({
  width: '100px',
  height: 'auto',
  margin: '-20px 0px 100px 10px'
});

function Heading3 (props) {
  return (
    <Heading4 className={props.className}>
      <PageItems />
      <Title>
        <LogoImage src='assets/images/logo.png' />
      </Title>
    </Heading4>
  );
}

export default Heading3;
