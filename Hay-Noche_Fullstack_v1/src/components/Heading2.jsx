import React from 'react';
import { styled } from '@mui/material/styles';
import MenuIcon from './MenuIcon';

const Heading1 = styled('div')({
  backgroundColor: `rgba(13, 12, 19, 0.8)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `30px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const MenuIcon1 = styled(MenuIcon)(({ theme }) => ({
  width: `24px`,
  height: `24px`,
  margin: `35px 0px 0px 385px`,
}));

const PageItems = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  left: `278px`,
  top: `19px`,
});

const Title = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  left: `16px`,
  top: `26px`,
});


const LogoImage = styled('img')({
  width: `100px`,
  height: `auto`,
  margin: `-20px 0px 100px 10px`,
});

function Heading2(props) {
  return (
    <Heading1 className={props.className}>
      <PageItems>
      </PageItems>
      <MenuIcon1 />
      <Title>
        <LogoImage src="assets/images/logo.png" />
      </Title>
    </Heading1>
  );
}

export default Heading2;
