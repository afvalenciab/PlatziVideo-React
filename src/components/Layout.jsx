import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import '../assets/styles/App.scss';

const Layout = ({ children, pathName }) => {
  let className = 'container';

  switch (pathName) {
    case '/':
      className += ' isHome';
      break;
    case '/login':
      className += ' isLogin';
      break;
    case '/register':
      className += ' isSignup';
      break;
    case '/player/:id':
      className = 'container';
      break;

    default:
      className += ' isNotFound';
      break;
  }

  return (
    <main className={className}>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    pathName: state.pathName,
  };
};

export default connect(mapStateToProps, null)(Layout);
