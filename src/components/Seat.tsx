import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import React from 'react';

interface SeatProps {
  style?: object;
  onPress?: any;
}

const Seat: React.FC<SeatProps> = ({style, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.seat, style]}>
      <Text style={styles.plusSign}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  seat: {
    position: 'absolute',
    width: 40,
    height: 40,
    backgroundColor: 'black',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#173847',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{scaleY: 1}, {rotateX: '25deg'}],
  },
  plusSign: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Seat;
