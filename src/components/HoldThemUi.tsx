import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';

const HoldThemUi = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Icon name="minus" size={8} color="#FFF" />
        <Text style={styles.text1}>500/1000(HOLD'EM)</Text>
      </View>
      <View style={styles.middleContainer}>
        <Text style={styles.text2}>Balence : 4.36k</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.text3}>Insufficen Funds Available</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text2}>ADD CASH</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    flex: 1,
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#10242d',
    paddingBottom: 15,
    paddingTop: 5,
  },
  text1: {
    color: 'white',
    fontSize: 20,
  },
  middleContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 25,
    borderBottomWidth: 1,
    borderColor: '#303f47',
    backgroundColor: '#182933',
    width: Dimensions.get('window').width,
  },
  text2: {
    color: 'white',
    fontSize: 20,
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 50,
    borderBottomWidth: 1,
    borderColor: '#303f47',
    backgroundColor: '#182933',
    width: Dimensions.get('window').width,
  },
  text3: {
    color: 'white',
    fontSize: 20,
  },
  button: {
    backgroundColor: '#056135',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 100,
  },
});

export default HoldThemUi;
