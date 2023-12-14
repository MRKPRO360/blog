import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import blogReducer from './blogReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
  blog: blogReducer,
  filter: filterReducer,
  theme: themeReducer,
});

export default rootReducer;
