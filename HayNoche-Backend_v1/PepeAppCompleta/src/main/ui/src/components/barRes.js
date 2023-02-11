import React, { useState, useEffect } from 'react';

const Barres = () => {
  const [promo, setPromo] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/promo')
      .then(response => response.json())
      .then(data => setPromo(data));
  }, []);

  return (
    <div>
      {promo.map(promo => (
        <div key={promo.promocionId}>
          <h2>{promo.promocionName}</h2>
        </div>
      ))}
    </div>
  );
};

export default Barres;
