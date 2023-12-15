/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import BootSplash from 'react-native-bootsplash';
import CircularTabScreen from './src/screens/CircularTabScreen';
import HomeScreen from './src/screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import SwipableModalScreen from './src/screens/SwipableModalScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function App(): React.JSX.Element {
  useEffect(() => {
    const init = async () => {};
    init().finally(async () => {
      await BootSplash.hide({fade: true});
    });
  }, []);

  const Stack = createNativeStackNavigator();

  const basicScreenOptions = {title: '', headerShown: false};
  return (
    <SafeAreaView style={styles.background}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={basicScreenOptions}
          />
          <Stack.Screen
            name="swipableModal"
            component={SwipableModalScreen}
            options={basicScreenOptions}
          />
          <Stack.Screen
            name="circularTab"
            component={CircularTabScreen}
            options={basicScreenOptions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {flex: 1},
});

export default App;
