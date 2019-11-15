import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;
  const handleLogout = () => {
    document.cookie = 'email=';
    document.cookie = 'name=';
    document.cookie = 'id=';
    document.cookie = 'token=';
    props.logoutRequest({});
    window.location.href = '/login';
  };

  return (
    <header className='header'>
      <Link to='/'>
        <figure>
          <img src={logo} alt='Logo Platzi Video' />
        </figure>
      </Link>
      <nav className='menu'>
        {hasUser ?
          <img src={gravatar(user.email)} alt={user.email} /> :
          <i className='icon-user-circle' />}

        <p>Perfil</p>
        <ul className='menu__options'>
          {hasUser ?
            <li><a href='#acount'>{user.name}</a></li> :
            null}

          {hasUser ?
            <li><a href='#logout' onClick={handleLogout}>Cerrar sesión</a></li> :
            <li><Link to='/login'>Iniciar sesión</Link></li>}
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object.isRequired,
  logoutRequest: PropTypes.any.isRequired,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
