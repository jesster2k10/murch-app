import { createStackNavigator } from 'react-navigation';
import screenNames from '../screen_names';
import { appStyles } from '@styles';
import Home from '../../features/home/containers';

export default createStackNavigator({
  [screenNames.HOME]: {
    screen: Home,
  }
}, {
  headerMode: 'none',
});