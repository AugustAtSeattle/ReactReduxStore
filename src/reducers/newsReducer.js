import * as actionType from '../actions/ActionType';

const newsReducer = (state = "Hello, Xiamen", action) => {
  let newState;
  switch (action.type) {
    case actionType.FETCH_NEWS:
      return newState = action.payload;
    default:
      return state;
  }
}

export default newsReducer;
