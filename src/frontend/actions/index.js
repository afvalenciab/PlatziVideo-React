
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

