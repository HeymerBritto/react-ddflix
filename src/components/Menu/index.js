import React from 'react';
import { Link } from 'react-router-dom';

import './menu.css';
import Logo from '../../assets/img/logo.png';
import Button from '../Button';

// import ButtonLink from './buttonlink';

function Menu() {
  return (
    <nav className='Menu'>

      <Link to='/'>
        <img className='Logo' src={Logo} alt='DdFlix Logo' />
      </Link>

      <Button as={Link} className='ButtonLink' to='/video'>
        Novo Video
      </Button>
    </nav>
  );
}

export default Menu;