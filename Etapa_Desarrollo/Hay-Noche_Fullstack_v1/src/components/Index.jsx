import React from 'react';
import { Helmet } from 'react-helmet';
import { styled } from '@mui/material/styles';
import Heading3 from './Heading3';
import Promos from './Promos';
import DownArrow from './DownArrow';
import RightArrow from './RightArrow';
import { Link } from 'react-router-dom';
import './Index.css';


const Index1 = styled('div')(({ theme }) => ({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `926px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
  [theme.breakpoints.down('sm')]: {
    flexDirection: `column`,
    height: `auto`,
  },
}));

const Rectangle1 = styled('div')(({ theme }) => ({
  backgroundColor: `rgba(13, 12, 19, 0.8)`,
  width: `428px`,
  height: `926px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
  [theme.breakpoints.down('sm')]: {
    width: `100%`,
    height: `300px`,
  },
}));

const Heading4 = styled(Heading3)(({ theme }) => ({
  width: `428px`,
  height: `82px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
}));

const Promos1 = styled(Promos)(({ theme }) => ({
  width: `428px`,
  height: `466px`,
  position: `absolute`,
  left: `0px`,
  top: `82px`,
}));

const Categorias = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `white`,
  fontSize: `50px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `279px`,
  height: `66px`,
  position: `absolute`,
  left: `74px`,
  top: `613px`,
});

const Todo = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `white`,
  fontSize: `50px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `153px`,
  top: `763px`,
});

const DownArrow1 = styled(DownArrow)(({ theme }) => ({
  width: `24px`,
  height: `24px`,
  position: `absolute`,
  left: `202px`,
  top: `824px`,
}));

const RightArrow1 = styled(RightArrow)(({ theme }) => ({
  width: `24px`,
  height: `24px`,
  position: `absolute`,
  left: `349px`,
  top: `633px`,
}));

function Index(props) {
  return (
    <Index1 className={props.className}>
      <Helmet>
        <title>Hay Noche</title>
      </Helmet>
      <Rectangle1></Rectangle1>
      <Heading4 />
      <Promos1 />
      <div>
      <Categorias className='titles'>{`Categorias`}</Categorias>
      <Link to="/Categories"><RightArrow1 /></Link>
      </div>
      <div>
      <Todo className='titles'>{`Todo`}</Todo>
      <Link to="/Todo"><DownArrow1 /></Link>
      </div>
    </Index1>
  );
}

export default Index;