import React from 'react';
import { Helmet } from 'react-helmet';
import { styled } from '@mui/material/styles';
import VerticalFlyerScroll from './VerticalFlyerScroll';

const Rectangle1 = styled('div')({
  backgroundColor: 'rgba(13, 12, 19, 0.8)',
  width: '428px',
  height: '926px',
  position: 'absolute',
  left: '0px',
  top: '0px'
});
const businesses = [
  { image: '/assets/images/Flyer2.jpg', name: 'Restaurantes', id: '1' },
  { image: '/assets/images/Flyer3.png', name: 'Bares', page: '../Bares' },
  { image: '/assets/images/Flyer4.jpg', name: 'Teatro', page: '../Teatro' },
  { image: '/assets/images/Flyer5.jpg', name: 'Musica', page: '../Musica' }
];

function Flyers (props) {
  return (
    <div>
      <Helmet>
        <title>Hay Noche</title>
      </Helmet>
      <Rectangle1>
        <VerticalFlyerScroll businesses={businesses} />
      </Rectangle1>
    </div>
  );
}

export default Flyers;
