import {
  Animated,
  Dimensions,
  Modal,
  PanResponder,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef} from 'react';

interface SwipeModalProps {
  isVisible: boolean;
  onClose: () => void;
  direction: 'top' | 'bottom' | 'left' | 'right';
  closeOnBackdropPress: boolean;
  children: React.ReactNode;
}
const SwipeModal = ({
  isVisible,
  onClose,
  direction,
  closeOnBackdropPress,
  children,
}: SwipeModalProps) => {
  const animation = useRef(new Animated.Value(0)).current;
  const isHorizontal = direction === 'left' || direction === 'right';
  const windowWidth = Dimensions.get('window').width;

  const outputRange = isHorizontal
    ? direction === 'right'
      ? [windowWidth, windowWidth * 0.2]
      : [-600, 0]
    : [600, 0];
  const showModal = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const hideModal = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => onClose());
  };

  useEffect(() => {
    if (isVisible) {
      showModal();
    } else {
      hideModal();
    }
  }, [isVisible, animation]);
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [null, isHorizontal ? {dx: animation} : {dy: animation}],
        {useNativeDriver: false},
      ),
      onPanResponderRelease: (evt, gestureState) => {
        const threshold = isHorizontal ? gestureState.dx : gestureState.dy;
        if (threshold > 100 || threshold < -100) {
          hideModal();
        } else {
          showModal();
        }
      },
    }),
  ).current;

  const modalPositionStyle = {
    transform: [
      {
        [isHorizontal ? 'translateX' : 'translateY']: animation.interpolate({
          inputRange: [0, 1],
          outputRange: outputRange,
        }),
      },
    ],
  };

  return (
    <Modal
      visible={isVisible}
      transparent
      onRequestClose={onClose}
      animationType="none">
      {closeOnBackdropPress && (
        <TouchableOpacity
          style={styles.backdrop}
          onPress={() => {
            onClose();
          }}
          activeOpacity={1}
        />
      )}

      <Animated.View
        style={[
          styles.modalContainer,
          modalPositionStyle,
          isHorizontal ? styles.horizontalModal : {},
        ]}
        {...panResponder.panHandlers}>
        {children}
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  horizontalModal: {
    left: 'auto',
    right: 'auto',
    top: 0,
    bottom: 0,
    width: '80%',
  },
});

export default SwipeModal;
