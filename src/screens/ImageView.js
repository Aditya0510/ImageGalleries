/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import Loader from '../components/ListLoader';
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
} from 'react-native-responsive-dimensions';

const ImageView = ({route}) => {
  const {item} = route.params;
  const [load, setLoad] = useState(true);
  return (
    <View
      style={{
        flexGrow: 1,
      }}>
      {load && (
        <Loader
          leftStyle={{marginLeft: 'auto', width: wp(90), height: hp(80)}}
          type="loader"
        />
      )}

      <Image
        source={{uri: item?.url}}
        style={{width: '100%', height: '100%'}}
        onLoadEnd={() => setLoad(false)}
        resizeMode="cover"
      />
    </View>
  );
};

export default ImageView;
