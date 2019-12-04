import * as actionTypes from './actionTypes';

export const add_repo = ( value ) => {
  return {
    type: actionTypes.ADD_REPO,
    val: value
  };
};
