import * as actionTypes from './actionTypes';
import axios from 'axios';

export const search_user = ( value ) => {
  return {
    type: actionTypes.SEARCH_USER,
    val: value
  };
};

export const search_user_util = (payload) => {
  return (dispatch) => {
    axios.get('https://api.github.com/users/buckyroberts')
      .then((response) => {
        let payload = response.data;
        dispatch(search_user(payload));
      })
  }
}
