import {
  LOGIN,
  LOGOUT,
  REMOVE_FROM_FAVOURITES,
  ADD_TO_FAVOURITES,
} from './types';

const initialState = {
  isLoggedIn: false,
  favourites: [],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case LOGIN:
      return {...state, isLoggedIn: payload};

    case LOGOUT:
      return {...state, isLoggedIn: payload};

    case ADD_TO_FAVOURITES:
      return {favourites: [...state.favourites, payload]};

    case REMOVE_FROM_FAVOURITES:
      return {
        favourites: [
          ...state.favourites.filter(favourite => favourite !== payload),
        ],
      };
  }

  return state;
};
