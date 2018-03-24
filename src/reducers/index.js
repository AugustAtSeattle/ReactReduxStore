import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import newsReducer from './newsReducer';

const counterApp = combineReducers({
  counterReducer,
  newsReducer
})

export default counterApp
