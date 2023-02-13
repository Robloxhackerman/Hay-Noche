import React from 'react';
import { Helmet } from 'react-helmet';
import { styled } from '@mui/material/styles';
import VerticalButtonScroll from './VerticalButtonScroll';

const Rectangle1 = styled('div')({
    backgroundColor: `rgba(13, 12, 19, 0.8)`,
    width: `428px`,
    height: `926px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
  });
  const buttons = [
    { src: '/assets/images/Category-Restaurantes-Small.png', alt: 'Restaurantes', page: '../Restaurantes' },
    { src: '/assets/images/Category-Bares-Small.png', alt: 'Bares', page: '../Bares' },
    { src: '/assets/images/Category-Teatro-Small.png', alt: 'Teatro', page: '../Teatro' },
    { src: '/assets/images/Category-Musica-Small.png', alt: 'Musica', page: '../Musica' },
    { src: '/assets/images/Category-Eventos-Small.png', alt: 'Eventos', page: '../Eventos' },
  ];

function Categories(props) {
    
    return (
      <div>
        <Helmet>
          <title>Hay Noche</title>
        </Helmet>
        <Rectangle1>
        <VerticalButtonScroll buttons={buttons}/>
        </Rectangle1>
      </div>
    );
  }
  
  export default Categories;