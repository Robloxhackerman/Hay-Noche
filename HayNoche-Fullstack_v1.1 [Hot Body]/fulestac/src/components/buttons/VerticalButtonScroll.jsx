import React from 'react';
import '../../css/buttons/VerticalButtonScroll.css';
import { Link } from 'react-router-dom';

const VerticalButtonScroll = ({ buttons, img }) => {
    return (
        <div className='scroll-container' style={{ height: '100%' }}>
            {buttons.map((button, index) => (
                <Link to={button.page}> <img
                    src={button.src}
                    alt={button.alt}
                    {...img}
                    key={index}
                    className='scroll-button'
                    onClick={() => console.log(button.alt)}
                />
                </Link>
            ))}
        </div>
    );
};

export default VerticalButtonScroll;
