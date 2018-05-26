import { combineReducers } from 'redux';

import shopReducer from './shop/services/reducers';
import productReducer from './product/services/reducers';
import homeReducer from './home/services/reducers';

export default combineReducers({
  shopReducer,
  productReducer,
  homeReducer,
});
