import { combineReducers } from 'redux';
import user from './user';
import category from './category';
import subCategory from './subCategory'
import mitra from './mitra';

const appReducer = combineReducers({
  user,
  category,
  subCategory,
  mitra
})
export default appReducer;