import './menu.css';
import React from 'react';
import Logo from '../../assets/img/logo.png';
import Button from '../Button';
//import ButtonLink from './buttonlink';

function Menu() {
    return (
        <nav className="Menu">
            
            <a href="/">
                <img className="Logo" src={Logo} alt="DdFlix Logo"></img>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;