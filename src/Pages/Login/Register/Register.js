import React, { useRef } from 'react';
import { Button, Col, Form, } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login');
    }
    if (user) {
        navigate('/');
    }
    const handleRegister = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='container w-50 mx-auto mt-2'>
            <h2 className='text-center'>Please Register</h2>
            <Form onSubmit={handleRegister}>

                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label >name</Form.Label>
                    <Form.Control ref={nameRef} type="name" placeholder="Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>

                <Button className='mt-5' variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
            <p className='my-2'>
                Already have an account?<Link to={'/login'} className='text-muted pe-auto text-decoration-none' onClick={navigateToLogin}> Please Login </Link>
            </p>
        </div>
    );
};

export default Register;