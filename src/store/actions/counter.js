import * as actionTypes from './actionTypes';

export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  };
};

export const add = ( value ) => {
  return {
    type: actionTypes.ADD,
    val: value
  };
};

export const addAsync = (value) => {
  return (dispatch) => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(add(3));
    }, 2000);
  }
}

export const subtract = ( value ) => {
  return {
    type: actionTypes.SUBTRACT,
    val: value
  };
};