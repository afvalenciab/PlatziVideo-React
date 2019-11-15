import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const setFavorite = (payload) => {
  return ({
    type: 'SET_FAVORITE',
    payload,
  });
};

export const deleteFavorite = (payload) => {
  return ({
    type: 'DELETE_FAVORITE',
    payload,
  });
};

export const loginRequest = (payload) => {
  return ({
    type: 'LOGIN_REQUEST',
    payload,
  });
};

export const logoutRequest = (payload) => {
  return ({
    type: 'LOGOUT_REQUEST',
    payload,
  });
};

export const registerRequest = (payload) => {
  return ({
    type: 'REGISTER_REQUEST',
    payload,
  });
};

export const setError = (payload) => {
  return ({
    type: 'SET_ERROR',
    payload,
  });
};

export const registerUser = (payload, redirectUrl) => {
  return (dispatch) => {
    axios.post('/auth/sign-up', payload)
      .then(({ data }) => dispatch(registerRequest(data)))
      .then(() => {
        window.location.href = redirectUrl;
      })
      .catch((err) => dispatch(setError(err)));
  };
};

export const setFavoriteUserMovies = (payload) => {
  const { id, cover, title, year, contentRating, duration, userId, _id } = payload;
  const userMovie = {
    userId,
    movieId: _id,
  };

  return (dispatch) => {
    axios({
      url: '/add/user-movies',
      method: 'post',
      data: userMovie,
    })
      .then(() => dispatch(setFavorite({ id, cover, title, year, contentRating, duration })))
      .catch((err) => dispatch(setError(err)));
  };
};

export const loginUser = ({ email, password }, redirectUrl) => {
  return (dispatch) => {
    axios({
      url: '/auth/sign-in',
      method: 'post',
      auth: {
        username: email,
        password,
      },
    })
      .then(({ data }) => {
        document.cookie = `email=${data.email}`;
        document.cookie = `name=${data.name}`;
        document.cookie = `id=${data.id}`;
        dispatch(loginRequest(data));
      })
      .then(() => {
        window.location.href = redirectUrl;
      })
      .catch((err) => dispatch(setError(err)));
  };
};

export const setVideoSource = (payload) => {
  return {
    type: 'SET_VIDEO_SOURCE',
    payload,
  };
};

export const setPathName = (payload) => {
  return {
    type: 'SET_PATH_NAME',
    payload,
  };
};

export const setSearchingMovie = (payload) => {
  return {
    type: 'SET_SEARCHING_MOVIE',
    payload,
  };
};

