import React from 'react';
import '../../css/flyers/Flyers.css';
import { Link } from 'react-router-dom';

const VerticalFlyerScroll = ({ businesses, img }) => {
    console.log(businesses);
    return (
        <div className='flyers' style={{ height: '100%' }}>
            {businesses.map((business, index) => (
                <Link to={`/SpecificPage/${business.id}`}> <img // this takes the business id and creates the new page
                    src={business.image} // find this info in flyers.jsx
                    alt={business.name} // find this info in flyers.jsx
                    {...img}
                    key={index}
                    onClick={() => console.log(business.name)}
                />
                </Link>
            ))}
        </div>
    );
};

export default VerticalFlyerScroll;
