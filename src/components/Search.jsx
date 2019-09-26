import React from 'react';
import '../assets/styles/components/Search.scss';

const Search = () => {
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
        />
        <i className='icon-search' />
      </div>
    </section>
  );
};
export default Search;
