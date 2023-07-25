/* eslint-disable no-unused-vars */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='bg-white'>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand><Link to='/'><svg xmlns="http://www.w3.org/2000/svg" width="85" height="69" viewBox="0 0 85 69" fill="none">
                        <path d="M42.0331 13.9454L25.2969 23.8637V36.0708L42.0331 45.9891L55.4588 38.3596V41.9836L42.0331 49.9946L25.2969 39.8855V44.2725L42.0331 54L58.7693 44.2725V32.0653L45.3435 39.8855V36.0708L58.7693 28.0599V23.8637L42.0331 13.9454Z" fill="#0156FF" />
                    </svg></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link><Link /**/ className='nav-link fw-semibold active' to='/' id='home' onClick={homeClick}>Home</Link></Nav.Link>
                            <Nav.Link><Link /**/ className='nav-link fw-semibold' id='product' to='/products' onClick={productClick}>Products</Link></Nav.Link>
                            <Nav.Link><Link /**/ className='nav-link fw-semibold' id='user' to='/users' onClick={userClick}>Users</Link></Nav.Link>
                            <Nav.Link><Link /**/ className='nav-link fw-semibold' id='error' to='/error' onClick={errorClick}>Error Page</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

const homeClick = () => {
    document.getElementById('home').classList.add('active');
    document.getElementById('product').classList.remove('active');
    document.getElementById('user').classList.remove('active');
    document.getElementById('error').classList.remove('active');
}
const productClick = () => {
    document.getElementById('home').classList.remove('active');
    document.getElementById('product').classList.add('active');
    document.getElementById('user').classList.remove('active');
    document.getElementById('error').classList.remove('active');
}
const userClick = () => {
    document.getElementById('home').classList.remove('active');
    document.getElementById('product').classList.remove('active');
    document.getElementById('user').classList.add('active');
    document.getElementById('error').classList.remove('active');
}
const errorClick = () => {
    document.getElementById('home').classList.remove('active');
    document.getElementById('product').classList.remove('active');
    document.getElementById('user').classList.remove('active');
    document.getElementById('error').classList.add('active');
}

export default Header;