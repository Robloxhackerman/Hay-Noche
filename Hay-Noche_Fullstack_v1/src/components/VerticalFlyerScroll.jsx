import React from "react";
import "./Flyers.css";
import { Link } from 'react-router-dom';

const VerticalFlyerScroll = ({ businesses, img }) => {
  return (
    <div class="flyers" style={{ height: "100%" }}>
      {businesses.map((business, index) => (
       <Link to={`/business/${business.id}`}> <img //this takes the business id and creates the new page
          src={business.image} // find this info in Flyers.jsx
          alt={business.name} // find this info in Flyers.jsx
          {...img}
          key={index}
          onClick={() => console.log(business.name)}
        /> </Link>
      ))}
    </div>
  );
};

export default VerticalFlyerScroll;
