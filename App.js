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

const App: () => Node = () => {
  const backgroundStyle = {
    flexGrow: 1,
    backgroundColor: 'green',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Routes />
    </SafeAreaView>
  );
};

export default App;
