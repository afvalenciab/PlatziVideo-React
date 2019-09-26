import React from 'react';
import '../assets/styles/components/Header.scss';
// import '../assets/styles/components/Icons.scss';

const Header = () => {
  return (
    <header className='header'>
      <figure>
        <img src='../assets/img/logo-platzi-video-BW2.png' alt='Logo Platzi Video' />
      </figure>
      <nav className='menu'>
        <i className='icon-user-circle' />
        <p>Perfil</p>
        <ul className='menu__options'>
          <li><a href='/'>Cuenta</a></li>
          <li><a href='/'>Cerrar Sesión</a></li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
