import metrics from './metrics';
import colors from './colors';

export default {
  header: {
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowRadius: 9,
    shadowOffset: {
      height: -2,
    },
    borderBottomWidth: 0,
    height: 64,
  },
  headerTitle: {
    fontWeight: 'bold',
  },
  container: {
    paddingTop: 15,
    backgroundColor: colors.background,
    flex: 1,
  },
  tabBar: {
    backgroundColor: 'white',
    borderTopColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowRadius: 9,
    shadowOffset: {
      height: 2,
    },
    borderBottomWidth: 0,
  }
}