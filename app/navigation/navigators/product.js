import { createStackNavigator } from 'react-navigation';
import screenNames from '../screen_names';

import Product from '../../features/product/containers';

export default createStackNavigator({
  [screenNames.PRODUCT]: {
    screen: Product,
  }
}, {
});