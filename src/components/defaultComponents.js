import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export const DefaultButton = ({onPress, ContainerStyle}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        padding: 20,
        borderRadius: 5,
        ...ContainerStyle,
      }}>
      <Text style={{color: '#FFF'}}>Login with google</Text>
    </TouchableOpacity>
  );
};
