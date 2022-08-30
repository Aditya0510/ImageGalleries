/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ImageList from '../screens/ImageList';
import ImageView from '../screens/ImageView';
import {useSelector} from 'react-redux';
import Login from '../screens/Auth/login';
import {ActivityIndicator, AppState, BackHandler} from 'react-native';
import {BiometricAuthentication} from '../utils/authentication';

const AppStack = () => {
  const Stack = createNativeStackNavigator();
  const userToken = useSelector(state => state?.user?.token);
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const [biometricGranted, setBiometricGranted] = useState(false);

  // Ask for biomettric Authentication
  useEffect(() => {
    if (appStateVisible === 'active' && !biometricGranted) {
      BiometricAuthentication()
        .then(() => {
          setBiometricGranted(true);
        })
        .catch(err => BackHandler.exitApp());
    }
  }, [appStateVisible]);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      appState.current = nextAppState;
      setAppStateVisible(appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  if (userToken && !biometricGranted) {
    return <ActivityIndicator size={'large'} />;
  }
  return (
    <Stack.Navigator initialRouteName="ImageList">
      {userToken ? (
        <>
          <Stack.Screen name="ImageList" component={ImageList} />
          <Stack.Screen name="ImageView" component={ImageView} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppStack;
