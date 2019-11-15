
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE': {
      const exist = state.myList.find((item) => item.id === action.payload.id);
      let result = { ...state };
      if (!exist) {
        result = {
          ...state,
          myList: [...state.myList, action.payload],
        };
      }
      return result;
    }

    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter((item) => item.id !== action.payload),
      };

    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };

    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };

    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };

    case 'SET_VIDEO_SOURCE':
      return {
        ...state,
        playing: state.trends.find((item) => item.id === action.payload) ||
          state.originals.find((item) => item.id === action.payload) ||
          [],
      };

    case 'SET_PATH_NAME':
      return {
        ...state,
        pathName: action.payload,
      };

    case 'SET_SEARCHING_MOVIE': {
      let listMovie = [];
      if (action.payload) {
        const trendMovies = state.trends.filter((item) => item.title.toLowerCase().includes(action.payload.toLowerCase()));
        const originalMovies = state.originals.filter((item) => item.title.toLowerCase().includes(action.payload.toLowerCase()));
        listMovie = trendMovies.concat(originalMovies);
      }

      return {
        ...state,
        searching: listMovie,
      };
    };

    default:
      return state;
  }
};

export default reducer;
