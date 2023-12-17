import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import React from 'react';

const ChatUi = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://thumbs.dreamstime.com/b/cute-raccoon-standing-one-leg-zen-position-meditating-isolated-white-background-plump-fluffy-raccoon-standing-one-140625000.jpg',
          }}
          style={styles.image}
        />
        <Text style={styles.text}>It's too quiet in here today</Text>
      </View>
      <View style={styles.chatBoxContainer}>
        <TextInput style={styles.chatBox} placeholder="Type a message..." />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '75%',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 75,
    marginBottom: 100,
  },
  text: {
    marginTop: 10,
    fontSize: 20,
    color: 'white',
  },
  chatBoxContainer: {
    width: '100%',
    padding: 10,
    backgroundColor: '#182933',
  },
  chatBox: {
    height: 40,
    borderWidth: 1,
    borderColor: '#182933',
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
});

export default ChatUi;
