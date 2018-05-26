import { createStackNavigator } from 'react-navigation';
import { appStyles } from '@styles';

import screenNames from '../screen_names';

import Shop from '../../features/shop/containers';
import Product from './product';

export default createStackNavigator({
  [screenNames.SHOP]: {
    screen: Shop,
  },
}, {
  headerMode: 'none',
});