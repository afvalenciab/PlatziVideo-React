import React from 'react';
import { connect } from 'react-redux';
import { setSearchingMovie } from '../actions';
import '../assets/styles/components/Search.scss';

const Search = (props) => {

  const handleChangeInput = (event) => {
    props.setSearchingMovie(event.target.value);
  };

  return (
    <section className='search'>
      <label htmlFor='search__bar'>¿Qué quieres ver hoy?</label>
      <div className='search__bar-container'>
        <input
          className='search__bar-input'
          type='text'
          name='search__bar'
          id='search__bar'
          placeholder='Buscar...'
          onChange={handleChangeInput}
        />
        <i className='icon-search' />
      </div>
    </section>
  );
};

const mapDispatchToProps = {
  setSearchingMovie,
};

export default connect(null, mapDispatchToProps)(Search);

