import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css'

function Navbar() {
    const location = useLocation();
    const [activeSection, setActiveSection] = useState(null);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const hash = location.hash.substring(1); // remove the '#' symbol
        setActiveSection(hash);
        // Scroll to the element
        const element = document.getElementById(hash);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navBar">
            <button className="menu-toggle" onClick={handleMenuToggle}>
                &#9776;
            </button>
            <table className={isMenuOpen ? 'menu-open' : 'menu-closed'}>
                <table>
                    <tr>
                        <td><Link to="/">Home</Link></td>
                        <td><a href='/#about'>About</a></td>
                        <td><a href='/#gallery'>Gallery</a></td>
                        <td><Link to="/Proficiency">Proficiency</Link></td>
                        <td><Link to="/Projects">Projects</Link></td>
                    </tr>    
                </table>
            </table>
        </div>
    );
}


export default Navbar;
