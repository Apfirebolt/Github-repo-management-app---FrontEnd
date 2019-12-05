import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';


const initialState = {
  repo_search: {},
  current_repo: {},
  current_user: {},
  user_search: {},
  query_search: {},
  current_query: {}
}

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionTypes.SEARCH_USER:
      return updateObject(state, {current_repo: action.val});

    case actionTypes.SEARCH_REPO:
      return updateObject(state, {user: 'Vishal'});

    case actionTypes.QUERY_RESULTS:
      return updateObject(state, {query_search: action.val});
  }
  return state;
};

export default reducer;