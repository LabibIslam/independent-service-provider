import React from 'react';
import Services from '../Services/Services';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div>
            <img src={img} alt="" />
            <h2>This is service: {name}</h2>
            <p>Price: ${price}</p>
            <p>{description}</p>
            <button>Book Now</button>
        </div>
    );
};

export default Service;