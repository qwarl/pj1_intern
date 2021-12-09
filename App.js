/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import InfoScreen from './src/screens/InfoScreen';
import DoneScreen from './src/screens/DoneScreen';
import OutOfNoodlesScreen from './src/screens/OutOfNoodlesScreen';
import ErrorScreen from './src/screens/ErrorScreen';
const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // <WelcomeScreen/>
    // <InfoScreen />
    // <DoneScreen/>
    // <OutOfNoodlesScreen/>
    <ErrorScreen/>
  );
};

const styles = StyleSheet.create({


});

export default App;
