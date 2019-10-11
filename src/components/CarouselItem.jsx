/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { setFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import imgCover1 from '../assets/static/above-action-aerial-2346289.jpg';

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, isList } = props;

  const handleSetFavorite = () => {
    props.setFavorite({
      id, cover, title, year, contentRating, duration,
    });
  };

  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };

  return (
    <div className='carrousel__item'>
      <figure>
        <img
          src={cover}
          alt={title}
        />
      </figure>
      <div className='carrousel__item-cover'>

        <Link to={`/player/${id}`}>
          <i className='icon-play icon' />
        </Link>

        { isList ?
          <i className='icon-remove' onClick={() => handleDeleteFavorite(id)} /> :
          <i className='icon-plus icon' onClick={handleSetFavorite} /> }
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

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
