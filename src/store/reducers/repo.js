import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';


const initialState = {
  current_repo: {},
  user: 'Amit'
}

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionTypes.ADD_REPO:
      return updateObject(state, {current_repo: state.current_repo});
  }
  return state;
};

export default reducer;