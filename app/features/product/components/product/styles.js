import {
  StyleSheet,
} from 'react-native';
import { metrics } from '@styles';

export default StyleSheet.create({
  scrollView: {
  },
  scrollViewInner: {
    height: 'auto',
    width: metrics.screen.width, 
    borderRadius: 20, 
    padding: 30, 
    top: -30, 
    shadowOpacity: 0.15
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
});
