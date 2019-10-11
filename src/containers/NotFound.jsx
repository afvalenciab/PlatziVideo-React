import React from 'react';
import { connect } from 'react-redux';
import { setPathName } from '../actions';
import '../assets/styles/components/NotFound.scss';

const NotFound = (props) => {
  props.setPathName(props.location ? props.location.pathname : {});
  return (
    <section className='not-found'>
      <p className='not-found__number'>404</p>
      <p className='not-found__text'>Página no encontrada</p>
    </section>
  );
};

const mapDispatchToProps = {
  setPathName,
};

export default connect(null, mapDispatchToProps)(NotFound);
