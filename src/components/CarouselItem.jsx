import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import imgCover1 from '../assets/static/above-action-aerial-2346289.jpg';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => {
  return (
    <div className='carrousel__item'>
      <figure>
        <img
          src={cover}
          alt={title}
        />
      </figure>
      <div className='carrousel__item-cover'>
        <i className='icon-play icon' />
        <i className='icon-plus icon' />
        <p className='title__movie'>{title}</p>
        <p className='detail__movie'>
          {`${year} ${contentRating} ${duration} minutos`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

export default CarouselItem;
