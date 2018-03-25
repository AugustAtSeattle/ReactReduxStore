import * as actionType from '../actions/ActionType';

const newsReducer = (state = {data:"Hello, Xiamen"}, action) => {
  let newState;
  switch (action.type) {
    case actionType.FETCH_NEWS:
      newState = action.payload;
      return newState;
    default:
      return state;
  }
}

export default newsReducer;
