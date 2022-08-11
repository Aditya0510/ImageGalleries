import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ImageList from '../screens/ImageList';
import ImageView from '../screens/ImageView';

const AppStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="ImageList">
      <Stack.Screen name="ImageList" component={ImageList} />
      <Stack.Screen name="ImageView" component={ImageView} />
    </Stack.Navigator>
  );
};

export default AppStack;
