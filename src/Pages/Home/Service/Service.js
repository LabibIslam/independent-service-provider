import React from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <Container>
            <Row xs={12} lg={3} className="g-4 justify-content-center">
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Card.Text>${price}</Card.Text>
                        <Button className='button-color'>Book Now</Button>
                    </Card.Body>
                </Card>
            </Row>
        </Container>

    );
};

export default Service;