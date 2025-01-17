import React, { useContext,useState } from 'react';
import { Link } from "react-router-dom";
import { themeContext } from '../../context/theme.context';
import { Navbar, Container, Button, Form } from 'react-bootstrap';
import './styles.css';

const Footer = () => {
    const [color,setColor] = useState("light")
    const { theme,toggleTheme } = useContext(themeContext);

    return (
        <>
        <Navbar bg={theme} expand="lg" className="d-flex justify-content-center privacidad">
            
                
                    <nav className="text-light">
                    {/* <a href="/privacy">Politica de Privacidad</a> */}
                    <Link to="/privacy">Politica de Privacidad</Link>
                    </nav>
           
        </Navbar>
            
        </>
)
}

export default Footer;