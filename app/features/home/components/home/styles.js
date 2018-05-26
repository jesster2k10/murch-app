import {
  StyleSheet,
} from 'react-native';
import {
  metrics,
  appStyles,
} from '@styles';

export default StyleSheet.create({
  container: {
    ...appStyles.container,
    position: 'absolute',
  },
  list: {
    height: metrics.screen.height + 70,
    width: metrics.screen.width,
  }
})