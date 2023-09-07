import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Link,
    useNavigate
} from "react-router-dom";
import { Button } from '@chakra-ui/react';
import {BiLogOut} from 'react-icons/bi';
import './Navbar.css'

const Navbar = ({ backgroundColor, logoColor }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const token = localStorage.getItem('token') || ''

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const redirectToLogin = () => {
        closeMenu()
        navigate('/login');
    };

    const logout = () =>{
        localStorage.removeItem('token')
        navigate('/login');
    }

    return (
        <div style={{ backgroundColor }} className="navbar">
            <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                <h1 style={{ color: logoColor }} className="logo">
                    My Tinerary
                </h1>
                <button className="hamburger" onClick={toggleMenu}>
                    <div className="bar" />
                    <div className="bar" />
                    <div className="bar" />
                </button>
                <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <li>
                        <Link to="/" onClick={closeMenu} >Home</Link>
                    </li>
                    <li>
                        <Link to="/cities" onClick={closeMenu} style={{ padding: '0px 1rem' }}>
                            Cities
                        </Link>
                    </li>
                    <li>
                    { token == '' ?
                        <Button onClick={redirectToLogin} colorScheme="facebook">
                            <img
                                src={'/assets/Vector.png'}
                                width={10}
                                style={{ marginRight: '5px' }}
                            />
                            Login
                        </Button>
                        :
                        <Button onClick={logout} colorScheme="facebook" leftIcon={<BiLogOut/>}>
                            Logout
                        </Button>
                    }
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
