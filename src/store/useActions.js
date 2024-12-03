import {REMOVE_FROM_FAVOURITES} from './types';
import {ADD_TO_FAVOURITES} from './types';
import {LOGIN, LOGOUT} from './types';

export const loginAction = () => {
  return {
    type: LOGIN,
    payload: true,
  };
};

export const logoutAction = () => {
  return {
    type: LOGOUT,
    payload: false,
  };
};

export const addToFavourites = payload => {
  return {
    type: ADD_TO_FAVOURITES,
    payload,
  };
};

export const removeFromFavourites = payload => {
  return {
    type: REMOVE_FROM_FAVOURITES,
    payload,
  };
};
