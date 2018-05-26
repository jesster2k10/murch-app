import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { StyleProvider } from '@shoutem/theme';
import { PersistGate } from 'redux-persist/integration/react';
import AppNavigation from './navigation';
import compileStore from './services/store';
import { shoutemTheme } from '@styles';

const { store, persistor } = compileStore(true);

class Main extends Component {
  render = () => {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <StyleProvider theme={shoutemTheme}>
            <AppNavigation />
          </StyleProvider>
        </PersistGate>
      </Provider>
    )
  }
}

export default Main;