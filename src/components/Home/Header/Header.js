import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logout } = useAuth();

    return (

        <Navbar className="header" collapseOnSelect expand="lg" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="#home"> <img
                    src="https://i.ibb.co/f28cczx/d43fe514c2404347bcc41b7656268f3d.png"
                    width="100"
                    height="80"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                /></Navbar.Brand>
                <Navbar.Brand className="fw-bolder brand" href="#home"><span style={{ color: 'blue' }}>Automobile</span> Regency</Navbar.Brand>
                <Nav className="menu" expand="lg">
                    <Link to="/home">Home</Link>
                    <Link to="/allProducts">More Products</Link>
                    {user.displayName ?
                        <div>
                            <Link to="/dashboard">Dashboard</Link>
                            <span className="user-name">{user.displayName}</span>
                            <button className="logout-button" onClick={logout}>Logout</button>

                        </div> :
                        <div>

                            <Link to="/reviews">Reviews</Link>
                            <Link to='/login'><button className="btn btn-success ms-1"> Login</button> </Link>

                        </div>
                    }





                </Nav>
            </Container>
        </Navbar>

    );
};

export default Header;