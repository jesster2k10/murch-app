import { StyleSheet } from 'react-native';
import { metrics } from '@styles';

export default StyleSheet.create({
  container: {
    margin: 20,
    flexDirection: 'column',
    flex: 1,
    width: metrics.screen.width / 2 - 40,
    height: metrics.screen.width / 2 + 20,
  },
  featureImage: {
    width: '100%',
    height: 150,
    borderRadius: 5
  },
  details: {
    marginTop: 10,
  },
  price: {
    marginTop: 5,
    flexDirection: 'row',
  }
});