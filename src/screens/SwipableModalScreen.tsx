import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

import CornerButton from '../components/CornerButton';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PokerTableUI from '../components/PokerTableUI';
import SwipeModal from '../components/SwipableModal';

const SwipableModalScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalDirection, setModalDirection] = useState('bottom');

  const openModal = (content, direction) => {
    setModalContent(content);
    setModalDirection(direction);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  console?.log(modalDirection);
  return (
    <View style={styles.container}>
      <PokerTableUI
        backgroundColor="#1A1A1A"
        borderColor="#1d1d1d"
        tableColor="#319c68"
      />
      <CornerButton
        position={{top: 0, left: 0}}
        onPress={() => openModal('Menu', 'left')}>
        <Icon name="bars" size={25} color="#FFF" />
      </CornerButton>
      <CornerButton
        position={{top: 0, right: 0}}
        onPress={() => openModal('Signal', 'right')}>
        <Icon name="signal" size={25} color="#FFF" />
      </CornerButton>
      <CornerButton
        position={{bottom: 0, left: 0}}
        onPress={() => openModal('Nature', 'bottom')}>
        <Icon name="leaf" size={25} color="#FFF" />
      </CornerButton>
      <CornerButton
        position={{bottom: 0, right: 0}}
        onPress={() => openModal('Chat', 'top')}>
        <Icon name="comment" size={25} color="#FFF" />
      </CornerButton>

      <SwipeModal
        isVisible={modalVisible}
        onClose={closeModal}
        direction={modalDirection}
        closeOnBackdropPress={true}>
        <View
          style={{
            flex: 1,
            width: '100%',
            backgroundColor: '#10242d',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>{modalContent}</Text>
        </View>
      </SwipeModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#180024',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SwipableModalScreen;
