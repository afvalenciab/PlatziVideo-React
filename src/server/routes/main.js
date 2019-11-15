import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import dotenv from 'dotenv';
import Routes from '../../frontend/routes/ServerRoutes';
import Layout from '../../frontend/components/Layout';
import reducer from '../../frontend/reducers';
import render from '../render';

dotenv.config();

const main = async (req, res, next) => {
  try {
    let initialState = {
      user: {},
      playing: {},
      searching: {},
      pathName: {},
      myList: [],
      trends: [],
      originals: [],
    };

    try {
      const { email, name, id, token } = req.cookies;
      let user = {};
      if (email && name && id) {
        user = {
          id,
          email,
          name,
        };
      }

      let movieList = await axios({
        url: `${process.env.API_URL}/api/movies`,
        headers: { Authorization: `Bearer ${token}` },
        method: 'get',
      });
      movieList = movieList.data.data;

      let userMovies = await axios({
        url: `${process.env.API_URL}/api/user-movies?userId=${id}`,
        headers: { Authorization: `Bearer ${token}` },
        method: 'get',
      });
      userMovies = userMovies.data.data;

      initialState = {
        user,
        playing: {},
        searching: {},
        pathName: {},
        myList: movieList.filter((item) => item._id === userMovies[0].movieId),
        trends: movieList,
        originals: movieList,
      };
    } catch (error) {
      console.log(error);
    }

    const isLogged = (initialState.user.id);
    const store = createStore(reducer, initialState);
    const html = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
          <Layout>
            {renderRoutes(Routes(isLogged))}
          </Layout>
        </StaticRouter>
      </Provider>,
    );
    const preloadedState = store.getState();
    res.send(render(html, preloadedState));
  } catch (error) {
    next(error);
  }
};

export default main;
