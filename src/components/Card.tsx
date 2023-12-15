import {StyleSheet, TouchableOpacity} from 'react-native';

const Card = ({onPress, padding = 20, extraStyle, children}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.card, {padding}, extraStyle]}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'yellow',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 10,
  },
});

export default Card;
