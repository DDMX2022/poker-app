import {StyleSheet, View} from 'react-native';

import Seat from './Seat';

interface PokerTableUIProps {
  backgroundColor: string;
  borderColor: string;
  tableColor: string;
}
const seatOnBorderPosition = -25;
const seatTopandBottomDisatance = '25%';
const PokerTableUI = ({
  backgroundColor,
  borderColor,
  tableColor,
}: PokerTableUIProps) => {
  const dynamicStyles = StyleSheet.create({
    container: {
      backgroundColor: backgroundColor,
    },
    pokerTable: {
      backgroundColor: tableColor,
      borderColor: borderColor,
    },
  });

  const seatPositions = [
    {
      position: 'top',
      value: seatOnBorderPosition,
      alignment: 'left',
      percentage: '45%',
    },
    {
      position: 'top',
      value: seatTopandBottomDisatance,
      alignment: 'right',
      percentage: seatOnBorderPosition,
    },
    {
      position: 'bottom',
      value: seatTopandBottomDisatance,
      alignment: 'right',
      percentage: seatOnBorderPosition,
    },
    {
      position: 'bottom',
      value: seatOnBorderPosition,
      alignment: 'left',
      percentage: '45%',
    },
    {
      position: 'bottom',
      value: seatTopandBottomDisatance,
      alignment: 'left',
      percentage: seatOnBorderPosition,
    },
    {
      position: 'top',
      value: seatTopandBottomDisatance,
      alignment: 'left',
      percentage: seatOnBorderPosition,
    },
  ];

  return (
    <View style={[styles.container, dynamicStyles.container]}>
      <View style={[styles.pokerTable, dynamicStyles.pokerTable]}>
        {seatPositions.map((seat, index) => (
          <Seat
            key={index}
            style={{
              [seat.position]: seat.value,
              [seat.alignment]: seat.percentage,
            }}
          />
        ))}

        <View style={[styles.tableLines1]}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222222',
    paddingHorizontal: 20,
  },

  pokerTable: {
    width: '100%',
    aspectRatio: 0.5,
    borderRadius: 300,
    borderWidth: 20,
    borderColor: 'red',
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{scaleY: 0.8}, {rotateX: '20deg'}],
    elevation: 100,
    shadowColor: '#FFF',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  tableLines1: {
    width: '75%',
    aspectRatio: 0.45,
    borderRadius: 300,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderColor: 'rgba(255,255,255,.4)',
  },
  seat: {
    position: 'absolute',
    width: 40, // Example seat size
    height: 40, // Example seat size
    backgroundColor: '#FFF', // Example seat color
    borderRadius: 20, // Make the seats round
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

PokerTableUI.defaultProps = {
  backgroundColor: '#000',
  borderColor: '#FFF',
  tableColor: '#2f9864',
};

export default PokerTableUI;
