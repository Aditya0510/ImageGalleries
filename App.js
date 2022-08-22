/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView} from 'react-native';
import Routes from './src/routes';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux';
import { PersistGate } from 'redux-persist/integration/react';

const App: () => Node = () => {
  const backgroundStyle = {
    flexGrow: 1,
    backgroundColor: '#FFF',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <Routes />
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
