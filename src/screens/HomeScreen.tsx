import {StyleSheet, Text, View} from 'react-native';

import Card from '../components/Card';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const tiles = [
    {
      id: 1,
      title: 'Swipable Modal',
      color: '#ffb703',
      onPress: () => {
        navigation.navigate('swipableModal');
      },
    },
    {
      id: 2,
      title: 'Circular Tab ',
      color: '#ee6c4d',
      onPress: () => {
        navigation.navigate('circularTab');
      },
    },
  ];
  return (
    <View style={styles.background}>
      {tiles?.map((item, index) => {
        return (
          <Card
            key={item?.id}
            onPress={item?.onPress}
            extraStyle={{...styles.card, backgroundColor: item?.color}}
            padding={20}>
            <Text style={styles.cardText}>{item?.title}</Text>
          </Card>
          
        );
      })}
      {}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#180024',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  card: {margin: 20, borderWidth: 1, borderColor: '#ddd'},
  cardText: {
    fontWeight: '900',
    fontSize: 40,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'serif',
  },
});
export default HomeScreen;
