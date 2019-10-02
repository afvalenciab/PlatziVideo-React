import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/Icons.css';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';

const App = () => {

  const videos = useInitialState(API);
  return (
    <div className='App'>
      <main className='container'>
        <Header />
        <Search />
        {videos.mylist && (
          videos.mylist.length > 0 && (
            <Carousel title='Mi Lista'>
              {videos.mylist.map((item) => {
                return <CarouselItem key={item.id} {...item} />;
              })}
            </Carousel>
          )
        )}

        {videos.trends && (
          videos.trends.length > 0 && (
            <Carousel title='Tendencias'>
              {videos.trends.map((item) => {
                return <CarouselItem key={item.id} {...item} />;
              })}
            </Carousel>
          )
        )}

        {videos.originals && (
          videos.originals.length > 0 && (
            <Carousel title='Originales de Platzi Video'>
              {videos.originals.map((item) => <CarouselItem key={item.id} {...item} />)}
            </Carousel>
          )
        )}

        <Footer />
      </main>
    </div>
  );
};
export default App;
