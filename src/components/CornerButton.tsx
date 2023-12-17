import {StyleSheet, TouchableOpacity} from 'react-native';

const CornerButton = ({position, children, onPress}) => {
  return (
    <TouchableOpacity style={[styles.cornerButton, position]} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cornerButton: {
    width: 60,
    aspectRatio: 1,
    backgroundColor: '#0e151c',
    borderWidth: 2,
    borderColor: '#173847',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default CornerButton;
