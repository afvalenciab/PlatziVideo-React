import React from 'react';
import '../assets/styles/components/Carousel.scss';

const Carousel = ({ children, title }) => {
  return (
    <section className='movies'>
      <h3>{title}</h3>
      <div className='carrousel__list'>
        {children}
      </div>
    </section>
  );
};

export default Carousel;
