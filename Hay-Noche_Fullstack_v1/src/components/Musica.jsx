import React from 'react';
import { Helmet } from 'react-helmet';
import { styled } from '@mui/material/styles';

const Rectangle1 = styled('div')({
    backgroundColor: `rgba(13, 12, 19, 0.8)`,
    width: `428px`,
    height: `926px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
  });

  function Musica(props) {
    
    return (
      <div>
        <Helmet>
          <title>Hay Noche</title>
        </Helmet>
        <Rectangle1>
        </Rectangle1>
      </div>
    );
  };
  
  export default Musica;