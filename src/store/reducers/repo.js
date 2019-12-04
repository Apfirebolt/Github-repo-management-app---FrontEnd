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
    case actionTypes.ADD_REPO:
      return updateObject(state, {current_repo: state.current_repo});

    case actionTypes.CHANGE_USER:
      return updateObject(state, {user: 'Vishal'});
  }
  return state;
};

export default reducer;