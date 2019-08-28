import { combineReducers } from 'redux';
import user from './user';
import category from './category';
import subCategory from './subCategory'
import mitra from './mitra';
import order from './order';

const appReducer = combineReducers({
  user,
  category,
  subCategory,
  mitra,
  order
})
export default appReducer;