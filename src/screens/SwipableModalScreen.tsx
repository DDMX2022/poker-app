import {StyleSheet, Text, View} from 'react-native';

import PokerTableUI from '../components/PokerTableUI';
import React from 'react';

const SwipableModalScreen = () => {
  return (
    <PokerTableUI
      backgroundColor="#1A1A1A"
      borderColor="#1d1d1d"
      tableColor="#319c68"
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#180024',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});

export default SwipableModalScreen;
