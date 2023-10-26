import React from 'react';
import { Link } from 'react-router-dom';
import 'D:/Semester 5/Web/latihanprak3w/my-react-app/src/css/style.css';

function Navbar() {
return (
    <nav>
    <h1>Navbar</h1>
    <ul>
    <li>
        <Link to="/" className="nav-button">Home</Link>
        </li>
        <li>
        <Link to="/about" className="nav-button">About Us</Link>
        </li>
        <li>
        <Link to="/contact" className="nav-button">Contact</Link>
        </li>
    </ul>
    </nav>
);
}

export default Navbar;