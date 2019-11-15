import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import helmet from 'helmet';
import axios from 'axios';
import passport from 'passport';
import boom from '@hapi/boom';
import cookieParser from 'cookie-parser';
import main from './routes/main';

dotenv.config();

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cookieParser());
// app.use(passport.initialize());
app.use(express.static(`${__dirname}/public`)); //Definir carpeta publica que va usar nuestro servidor.

//Basic strategy
require('./utils/auth/strategies/basic');

if (ENV === 'development') {
  console.log('Loading dev config');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = {
    contentBase: `http://localhost:${PORT}`,
    port: PORT,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colost: true },
  };
  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else {
  console.log(`Loading ${ENV} config`);
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable('x-powered-by'); //deshabilitar cabeceras que informar que servidor se esta usando
}

app.post('/auth/sign-in', async (req, res, next) => {
  passport.authenticate('basic', async (error, data) => {
    try {
      if (error || !data) {
        return next(boom.unauthorized());
      }

      req.login(data, { session: false }, async (error) => {
        if (error) {
          next(error);
        }

        const { token, ...user } = data;
        res.clearCookie('token');
        res.cookie('token', token, {
          httpOnly: !(ENV === 'development'),
          secure: !(ENV === 'development'),
          domain: 'platzivideo.com',
        });
        res.status(200).json(user.user);
      });
    } catch (error) {
      next(error);
    }
  })(req, res, next);
});

app.post('/auth/sign-up', async (req, res, next) => {
  const { body: user } = req;
  console.log('auth/sign-up');
  console.log(user);
  try {
    const userData = await axios({
      url: `${process.env.API_URL}/api/auth/sign-up`,
      method: 'post',
      data: user,
    });

    console.log('userData server.js');
    console.log(userData);
    res.status(201).json({
      name: req.body.name,
      email: req.body.email,
      id: userData.data.data,
    });
  } catch (error) {
    next(error);
  }
});

app.post('/add/user-movies', async (req, res, next) => {
  console.log('add user movies');
  const { body: userMovie } = req;
  console.log(userMovie);
  console.log(req.cookies);

  const { token } = req.cookies;
  try {
    const userMovieData = await axios({
      url: `${process.env.API_URL}/api/user-movies`,
      headers: { Authorization: `Bearer ${token}` },
      method: 'post',
      data: userMovie,
    });

    res.status(201).json({
      userMovie,
      userMovieId: userMovieData.data.data,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

app.get('*', main);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }

  console.log(`Server is running on http://localhost:${PORT}`);
});

