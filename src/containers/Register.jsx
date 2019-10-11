import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerRequest, setPathName } from '../actions';
import '../assets/styles/components/Register.scss';

const Register = (props) => {
  props.setPathName(props.location.pathname);
  const [form, setForm] = useState({
    name: '',
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
    props.registerRequest(form);
    props.history.push('/');
  };

  return (
    <section className='signup'>
      <h2>Regístrate</h2>
      <form onSubmit={handleSubmit}>
        <input name='name' type='text' placeholder='Nombre' onChange={handleInput} />
        <input name='email' type='email' placeholder='Correo' onChange={handleInput} />
        <input name='password' type='Password' placeholder='Constraseña' onChange={handleInput} />
        <button type='submit'>Registrarme</button>
      </form>
      <div className='singup__login'>
        <p>
          Ya tienes una cuenta
          <Link to='/login'>
            Inicia sesíon
          </Link>
        </p>
      </div>
    </section>
  );
};

const mapDispatchToProps = {
  registerRequest,
  setPathName,
};

export default connect(null, mapDispatchToProps)(Register);
