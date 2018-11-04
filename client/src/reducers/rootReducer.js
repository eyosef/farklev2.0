import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import farkle from './farkleReducer'; 
import like from './likeReducer'; 
// import session from './sessionReducer';
import comment from './commentReducer';

const rootReducer = combineReducers({
  farkle,
  comment,
  like,
  router: routerReducer
});

export default rootReducer;