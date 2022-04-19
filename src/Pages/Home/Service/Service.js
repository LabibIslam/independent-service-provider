import React from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                        <Link to="/checkout">
                            <Button className='bg-dark'>Book Now</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Row>
        </Container>

    );
};

export default Service;