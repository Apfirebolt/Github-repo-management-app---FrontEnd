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

// Storing query results
export const search_result = ( value ) => {
  return {
    type: actionTypes.QUERY_RESULTS,
    val: value
  };
};

export const search_result_store = (payload) => {

  return (dispatch) => {
    axios.get(`https://api.github.com/search/repositories?q=${payload.search_text}&sort=${payload.sort_by}&order=${payload.order_by}`)
      .then((response) => {
        let payload = response.data;
        dispatch(search_result(payload));
      })
  }
}


