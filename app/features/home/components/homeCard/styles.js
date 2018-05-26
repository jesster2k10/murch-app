import {
  StyleSheet,
} from 'react-native';

export default StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    borderRadius: 12,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowRadius: 25,
    shadowOffset: {
      x: 0,
      y: 8
    },
    height: 390,
    backgroundColor: 'transparent',
    zIndex: -1
  },
  image: {
    height: 390,
    flex: 1,
    borderRadius: 12,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 0
  },
  overlay: {
    borderRadius: 12,
  },
  inner: {
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'flex-end',
    padding: 20,
    borderRadius: 12,
  },
  top: {
    justifyContent: 'flex-start',
    height:'100%',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    padding: 20,
  }
})