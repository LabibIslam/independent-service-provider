import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div>
            <h2 className='text-center'>Our Services</h2>
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                >
                </Service>)
            }
        </div>
    );
};

export default Services;