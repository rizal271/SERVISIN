import {combineReducers} from 'redux';
import user from './user';
import mitra from './mitra'

const appReducer = combineReducers({
  user,
  mitra,
});

export default appReducer;