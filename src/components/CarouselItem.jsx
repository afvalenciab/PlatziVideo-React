import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import imgCover1 from '../assets/static/above-action-aerial-2346289.jpg';

const CarouselItem = () => {
  return (
    <div className='carrousel__item'>
      <figure>
        <img
          src={imgCover1}
          alt='Imagen Pelicula 1'
        />
      </figure>
      <div className='carrousel__item-cover'>
        <i className='icon-play icon' />
        <i className='icon-plus icon' />
        <p className='title__movie'>Pelicula 1</p>
        <p className='detail__movie'>2019 16+ 114 minutos</p>
      </div>
    </div>
  );
};

export default CarouselItem;
