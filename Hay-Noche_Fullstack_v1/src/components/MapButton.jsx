import React from 'react';

function MapButton ({ address }) {
  const handleClick = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`);
  };

  return (
    <img
      src='/assets/images/VerEnMapa.png'
      alt='Button'
      onClick={handleClick}
    />
  );
}

export default MapButton;
