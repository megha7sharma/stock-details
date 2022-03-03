import { combineReducers } from 'redux';
import stocksReducer from './stocksreducer';

const rootReducer = combineReducers ({
  stocksData : stocksReducer
});

export default rootReducer;
