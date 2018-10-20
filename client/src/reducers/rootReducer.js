import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import farkle from './farkleReducer'; 
// import session from './sessionReducer';
import comment from './commentReducer';

const rootReducer = combineReducers({
  farkle,
  comment,
  router: routerReducer
});

export default rootReducer;