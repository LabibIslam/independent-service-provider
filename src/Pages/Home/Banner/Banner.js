import React, { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import wildlife1 from '../../../images/wildlife1.jpg';
import eventphotography from '../../../images/eventphotography.jpg';
import weddingphotograpgy from '../../../images/weddingphotograpgy.jpg';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Container className="justify-content-center mt-4">
            <Carousel activeIndex={index} onSelect={handleSelect} >
                <Carousel.Item>
                    <img
                        className="w-100 h-30"
                        src={weddingphotograpgy}
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100 h-30"
                        src={eventphotography}
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100 h-30"
                        src={wildlife1}
                        alt=""
                    />
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Banner;