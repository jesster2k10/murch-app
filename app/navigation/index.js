import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import screenNames from './screen_names';
import {
  appStyles,
} from '@styles';

import HomeNavigator from './navigators/home';
import ShopNavigator from './navigators/shop';
import ProductNavigator from './navigators/product';

const MainNavigator = createBottomTabNavigator({
  [screenNames.HOME]: {
    screen: HomeNavigator,
  },
  [screenNames.SHOP]: {
    screen: ShopNavigator,
  },
}, {
  initalRouteName: screenNames.HOME,
  tabBarOptions: {
    style: appStyles.tabBar,
  }
});

const appNavigator = createStackNavigator({
  [screenNames.PRODUCT]: {
    screen: ProductNavigator,
  },
  [screenNames.MAIN]: {
    screen: MainNavigator,
  },
}, {
  initialRouteName: screenNames.PRODUCT,
  navigationOptions: ({ navigation }) => ({
    title: 'MURCH',
    headerStyle: appStyles.header,
  })
})

export default appNavigator;
export * from './actions';