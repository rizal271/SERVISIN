import {combineReducers} from 'redux';
import user from './user';
import category from './category';
import subCategory from './subCategory'

const appReducer = combineReducers({
  user,
  category,
  subCategory
});

export default appReducer;