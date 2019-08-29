import { combineReducers } from 'redux';
import user from './user';
import category from './category';
import subCategory from './subCategory'
import mitra from './mitra';
import orderuser from './orderUser';
import order from './order';
import notif from './notif';


const appReducer = combineReducers({
  user,
  category,
  subCategory,
  mitra,
  orderuser,
  order,
  notif
})
export default appReducer;