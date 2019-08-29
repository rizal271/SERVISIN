import { combineReducers } from 'redux';
import user from './user';
import category from './category';
import subcategory from './subCategory'
import mitra from './mitra';
import orderuser from './orderUser';
import order from './order';


const appReducer = combineReducers({
  user,
  category,
  subcategory,
  mitra,
  orderuser,
  order
})
export default appReducer;