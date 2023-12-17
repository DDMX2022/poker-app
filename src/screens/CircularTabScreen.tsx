import {
  Button,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

import {CircularArrayList} from '../utilities/helper';

const {width} = Dimensions.get('window');

const CircularTabScreen = () => {
  const [dataList, setDataList] = useState(new CircularArrayList(10));
  const [data, setData] = useState([]);
  const flatListRef = useRef(null);

  useEffect(() => {
    updateFlatListData();
  }, []);

  useEffect(() => {
    if (dataList.count === 1) {
      flatListRef.current.scrollToIndex({index: 0, animated: true});
    }
  }, [dataList.count]);
  const updateFlatListData = () => {
    const dataArray = dataList.toArray();
    if (dataArray.length > 1) {
      setData([dataArray[dataArray.length - 1], ...dataArray, dataArray[0]]);
    } else {
      setData(dataArray);
    }
  };

  const removeCurrentItem = (item, index) => {
    let actualIndex = (index - 1 + dataList.count) % dataList.count;

    dataList.removeAt(actualIndex);
    updateFlatListData();

    if (dataList.count === 0) {
      dataList.reset();
      setData([]);
    }
  };

  const addNewItem = () => {
    const newItem = `Item ${dataList.count + 1}`;
    dataList.add(newItem);
    console?.log(dataList);
    updateFlatListData();
  };

  const renderItem = ({item, index}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item ? item : 'item 0'}</Text>
      <Button
        title="Remove Current Item"
        onPress={() => removeCurrentItem(item, index)}
      />
    </View>
  );
  return (
    <View style={styles.fullScreen}>
      <View style={styles.buttonContainer}>
        <Button title="Add New Item" onPress={addNewItem} />
      </View>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEnabled={dataList.count > 1}
        onMomentumScrollEnd={event => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          if (index === 0) {
            flatListRef.current.scrollToIndex({
              index: data.length - 2,
              animated: false,
            });
          } else if (index === data.length - 1) {
            flatListRef.current.scrollToIndex({index: 1, animated: false});
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    justifyContent: 'center',
  },
  itemContainer: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    padding: 20,
  },
  itemText: {
    fontSize: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
});

export default CircularTabScreen;
