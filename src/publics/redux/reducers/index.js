import { combineReducers } from 'redux';
import user from './user';
import category from './category';
import subCategory from './subCategory'
import mitra from './mitra';
import orderuser from './orderUser';

const appReducer = combineReducers({
  user,
  category,
  subCategory,
  mitra,
  orderuser
})
export default appReducer;