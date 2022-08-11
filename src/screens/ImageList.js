import {
  FlatList,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Loader from '../components/ListLoader';
import {
  responsiveWidth as wp,
  responsiveHeight as hp,
} from 'react-native-responsive-dimensions';

const ImageList = ({navigation}) => {
  const [imageListData, setImageListData] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => {
        setFetched(true);
        setImageListData(data);
      })
      .catch(err => console.log('@@@@err', err));
  }, []);

  const RenderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ImageView', {item})}
        style={styles.itemContainer}>
        <Image
          source={{uri: item.thumbnailUrl}}
          style={{width: wp(30), height: wp(30)}}
        />
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const EmptyComponent = () => {
    if (fetched) {
      return (
        <View style={{flexGrow: 1}}>
          <Text>No Data found</Text>
        </View>
      );
    }
    const emptyArray = [...new Array(10).fill({})];
    return emptyArray.map((e, i) => <Loader key={i} isList />);
  };

  const filteredList = () => {
    return search
      ? imageListData?.filter(item =>
          item?.title?.includes(search.toLowerCase()),
        )
      : imageListData;
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        value={search}
        onChangeText={setSearch}
        style={styles.searchBox}
      />
      <FlatList
        data={filteredList()}
        ListEmptyComponent={<EmptyComponent />}
        renderItem={RenderItem}
        keyExtractor={item => item.id}
        removeClippedSubviews={true} // Unmount components when outside of window
        initialNumToRender={2} // Reduce initial render amount
        maxToRenderPerBatch={1} // Reduce number in each render batch
        updateCellsBatchingPeriod={100} // Increase time between renders
        windowSize={7} // Reduce the window size
      />
    </View>
  );
};
const styles = StyleSheet.create({
  searchBox: {
    borderColor: '#EFEFEf',
    borderWidth: 2,
    padding: wp(3),
    marginBottom: hp(2),
    borderRadius: 5,
  },
  container: {
    backgroundColor: '#FFF',
    flexGrow: 1,
    padding: wp(4),
  },
  itemContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: '#EEEE',
    paddingVertical: hp(2),
    alignItems: 'center',
  },
  title: {
    marginLeft: wp(2),
    flex: 1,
  },
});

export default ImageList;
