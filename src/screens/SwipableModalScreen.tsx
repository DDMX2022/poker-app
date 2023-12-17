import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import ChatUi from '../components/ChatUi';
import CornerButton from '../components/CornerButton';
import GameResultsAndStatsComponent from '../components/GameResultsAndStatsComponent';
import HoldThemUi from '../components/HoldThemUi';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PokerTableUI from '../components/PokerTableUI';
import SwipeModal from '../components/SwipableModal';
import {useState} from 'react';

const SwipableModalScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalDirection, setModalDirection] = useState('bottom');
  const [holdThemPressed, setHoldTemPressed] = useState(false);
  const openModal = (content, direction) => {
    setModalContent(content);
    setModalDirection(direction);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setHoldTemPressed(false);
  };
  const HoldThemButton = () => (
    <TouchableOpacity
      style={[styles.button]}
      onPress={() => {
        openModal(<HoldThemUi />, 'bottom');
        setHoldTemPressed(true);
      }}>
      <Text style={styles.Text1}>HOLD'EM</Text>
      {holdThemPressed && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>!</Text>
        </View>
      )}
    </TouchableOpacity>
  );
  const JoinSimilarButton = () => (
    <TouchableOpacity style={[styles.button]}>
      <Icon name="plus" size={8} color="#FFF" />
      <Text style={styles.Text2}>Join Similar</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <PokerTableUI
        backgroundColor="#1A1A1A"
        borderColor="#1d1d1d"
        tableColor="#319c68"
      />
      <View style={styles.topView}>
        <CornerButton
          position={{top: 0, left: 0}}
          onPress={() => openModal(<ChatUi />, 'left')}>
          <Icon name="bars" size={25} color="#FFF" />
        </CornerButton>
        <HoldThemButton />
        <JoinSimilarButton />
        <CornerButton
          position={{top: 0, right: 0}}
          onPress={() => openModal(<GameResultsAndStatsComponent />, 'right')}>
          <Icon name="signal" size={25} color="#FFF" />
        </CornerButton>
      </View>
      <View style={styles.bottomView}>
        <CornerButton
          position={{bottom: 0, left: 0}}
          onPress={() => openModal(<GameResultsAndStatsComponent />, 'left')}>
          <Icon name="leaf" size={25} color="#FFF" />
        </CornerButton>
        <CornerButton
          position={{bottom: 0, right: 0}}
          onPress={() => openModal(<ChatUi />, 'right')}>
          <Icon name="comment" size={25} color="#FFF" />
        </CornerButton>
      </View>

      <SwipeModal
        isVisible={modalVisible}
        onClose={closeModal}
        direction={modalDirection}
        closeOnBackdropPress={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#10242d',
            justifyContent: 'center',
            borderTopEndRadius: modalDirection === 'bottom' ? 25 : 0,
            borderTopStartRadius: modalDirection === 'bottom' ? 25 : 0,
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
  topView: {
    position: 'absolute',
    top: 0,
    width: '100%',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginTop: 25,
    alignItems: 'center',
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 25,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  button: {
    width: 100,
    aspectRatio: 2,
    backgroundColor: '#0e151c',
    borderWidth: 2,
    borderColor: '#173847',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  Text1: {
    fontSize: 16,
    color: 'white',
  },
  Text2: {
    fontSize: 10,
    color: 'white',
  },
  badge: {
    position: 'absolute',
    right: -10,
    top: -10,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SwipableModalScreen;
