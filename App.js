import React, {useEffect} from 'react';
import {Platform, StatusBar, useColorScheme} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {COLORS} from './src/utils/colors';
import {StackNavigator} from './src/navigators/StackNavigator';

function App() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent');
      StatusBar.setTranslucent(true);
    }
  }, []);

  return (
    <NavigationContainer
      theme={{
        dark: colorScheme === 'dark',
        colors: COLORS[colorScheme ?? 'dark'],
      }}>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;
