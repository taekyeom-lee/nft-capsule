import { combineReducers } from 'redux';
import accountReducer from './reducer/accountReducer';

export default combineReducers({
  account: accountReducer,
});
