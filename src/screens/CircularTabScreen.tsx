import {
  Button,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';

import {CircularArrayList} from '../utilities/helper';

const {width, height} = Dimensions.get('window');
const ITEM_HEIGHT = height * 0.8;
const CircularTabScreen = ({isCyclic = true, animatedSwitch = false}) => {
  const [dataList, setDataList] = useState(new CircularArrayList(10));
  const [data, setData] = useState([]);
  const flatListRef = useRef(null);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [isRemovingItem, setIsRemovingItem] = useState(false);

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
    if (dataArray.length > 1 && isCyclic) {
      setData([dataArray[dataArray.length - 1], ...dataArray, dataArray[0]]);
    } else {
      setData(dataArray);
    }
  };
  useEffect(() => {
    if (selectedTabIndex >= 0 && selectedTabIndex < dataList.count) {
      const adjustedIndex =
        isCyclic && data.length > 1 ? selectedTabIndex + 1 : selectedTabIndex;
      flatListRef.current?.scrollToIndex({
        index: adjustedIndex,
        animated: animatedSwitch,
      });
    }
  }, [selectedTabIndex, dataList, animatedSwitch, isCyclic, data.length]);
  useEffect(() => {
    if (!isRemovingItem && dataList.count === 0) {
      setIsRemovingItem(false);
    }
  }, [dataList.count, isRemovingItem]);
  const removeCurrentItem = useCallback(
    (item, index) => {
      setIsRemovingItem(true);
      let actualIndex = (index - 1 + dataList.count) % dataList.count;

      dataList.removeAt(actualIndex);
      updateFlatListData();

      if (dataList.count === 0) {
        dataList.reset();
        setData([]);
      }
      setIsRemovingItem(false);
    },
    [dataList, updateFlatListData],
  );

  const addNewItem = useCallback(() => {
    const newItem = `Item ${dataList.count + 1}`;
    dataList.add(newItem);
    updateFlatListData();

    const newTabIndex = dataList.count - 1;
    setSelectedTabIndex(newTabIndex);
  }, [dataList]);

  const onMomentumScrollEnd = event => {
    const offset = event.nativeEvent.contentOffset.x;
    const index = Math.round(offset / width);
    if (isCyclic) {
      if (index === 0) {
        flatListRef.current.scrollToOffset({
          offset: width * (data.length - 2),
          animated: animatedSwitch,
        });
      } else if (index === data.length - 1) {
        flatListRef.current.scrollToOffset({
          offset: width,
          animated: animatedSwitch,
        });
      }
      const newIndex =
        index === 0
          ? data.length - 3
          : index === data.length - 1
          ? 0
          : index - 1;
      setSelectedTabIndex(newIndex);
    } else {
      setSelectedTabIndex(index);
    }
  };

  const TabHeader = React.memo(({titles, onSelect, selectedTabIndex}) => {
    return (
      <View style={styles.tabHeaderContainer}>
        {titles.map((title, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.tabHeader,
              selectedTabIndex === index && styles.selectedTabHeader,
            ]}
            onPress={() => onSelect(index)}>
            <Text>{title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  });

  const getItemLayout = (data, index) => ({
    length: ITEM_HEIGHT,
    offset: width * index,
    index,
  });
  const handleSelectTab = useCallback(
    index => {
      setSelectedTabIndex(index);
      const adjustedIndex = isCyclic && data.length > 1 ? index + 1 : index;
      flatListRef.current.scrollToIndex({
        index: adjustedIndex,
        animated: animatedSwitch,
      });
    },
    [dataList, animatedSwitch],
  );

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
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={addNewItem}
        disabled={isRemovingItem}>
        <Text style={styles.buttonText}>ADD NEW ITEM</Text>
      </TouchableOpacity>
      <TabHeader
        titles={dataList.toArray().map(item => item)}
        onSelect={handleSelectTab}
        selectedTabIndex={selectedTabIndex}
      />
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEnabled={dataList.count > 1}
        onMomentumScrollEnd={onMomentumScrollEnd}
        getItemLayout={getItemLayout}
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
    padding: 10,
    backgroundColor: 'green',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
  tabHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tabHeader: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
  },
  selectedTabHeader: {
    backgroundColor: '#4CAF50',
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CircularTabScreen;
