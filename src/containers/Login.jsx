import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest, setPathName } from '../actions';
import '../assets/styles/components/Login.scss';
import '../assets/styles/Icons.css';

const Login = (props) => {
  props.setPathName(props.location.pathname);
  const [form, setForm] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };

  return (
    <section className='login'>
      <h2>Inicia sesión</h2>
      <form onSubmit={handleSubmit}>
        <input name='email' type='email' placeholder='Correo' onChange={handleInput} />
        <input name='password' type='Password' placeholder='Constraseña' onChange={handleInput} />
        <button type='submit'>Iniciar sesión</button>
        <div className='login__options'>
          <label htmlFor='remerberme'>
            <input type='checkbox' name='remerberme' id='remerberme' />
            Recuerdame
          </label>
          <a href='/'>Olvide mi contraseña</a>
        </div>
      </form>
      <div className='login__social'>
        <a href='/'>
          <i className='icon-google' />
          Iniciar sesión con Google
        </a>
        <a href='/'>
          <i className='icon-twitter' />
          Iniciar sesión con Twitter
        </a>
      </div>
      <div className='login__singup'>
        <p>
          No tienes ninguna cuenta
          <Link to='/register'>
            Regístrate
          </Link>
        </p>
      </div>
    </section>
  );
};

const mapDispatchToProps = {
  loginRequest,
  setPathName,
};

export default connect(null, mapDispatchToProps)(Login);
