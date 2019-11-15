import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import { setPathName } from '../actions';
import '../assets/styles/components/Home.scss';
import '../assets/styles/Icons.css';

const Home = (props) => {
  const { myList, trends, originals, searching } = props;
  props.setPathName(props.location.pathname);

  return (
    <div className='home'>
      <Search />

      {searching.length > 0 && (
        <Carousel title='Resultados de la busqueda'>
          {searching.map((item) => {
            return <CarouselItem key={item.id} {...item} />;
          })}
        </Carousel>
      )}

      {myList &&
        (myList.length > 0 && (
          <Carousel title='Mi Lista'>
            {myList.map((item) => {
              return <CarouselItem key={item.id} {...item} isList />;
            })}
          </Carousel>
        ))}

      {!searching.length && (
        trends &&
        (trends.length > 0 && (
          <Carousel title='Tendencias'>
            {trends.map((item) => {
              return <CarouselItem key={item._id} {...item} />;
            })}
          </Carousel>
        ))
      )}

      {!searching.length && (
        originals &&
        (originals.length > 0 && (
          <Carousel title='Originales de Platzi Video'>
            {originals.map((item) => (
              <CarouselItem key={item._id} {...item} />
            ))}
          </Carousel>
        ))
      )}

    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
    searching: state.searching,
  };
};

const mapDispatchToProps = {
  setPathName,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
