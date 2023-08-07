import React from 'react';
import {
    BrowserRouter as Router,
        Link,
} from "react-router-dom";
import { Button } from '@chakra-ui/react'
import './Navbar.css'

const Navbar = ({ backgroundColor, logoColor }) => {
    return (
        <div style={{ backgroundColor }} className="navbar">
            <nav className='nav'>
                <h1 style={{ color:logoColor }} className="logo">My Tinerary</h1>
                <ul className="nav-links">
                    <li><Link to="/ ">Home</Link></li>
                    <li><Link to="/cities" style={{ padding: "0px 1rem" }}>Cities</Link></li>
                    <li><Button colorScheme='facebook'><img src={'/assets/Vector.png'} width={10} style={{marginRight:"5px"}}/> Login</Button></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
