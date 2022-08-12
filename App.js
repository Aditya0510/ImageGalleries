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
import {store} from './src/redux';

const App: () => Node = () => {
  const backgroundStyle = {
    flexGrow: 1,
    backgroundColor: '#FFF',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
