import React from 'react';
import {useColorScheme} from 'react-native';

import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TestScreen from './src/features/TestScreen';

function App() {
  const Stack = createNativeStackNavigator();
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen name="TestScreen" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
