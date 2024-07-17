import React, {useEffect} from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/features/HomeScreen';
import {COLORS} from './src/utils/colors';

function App() {
  const Stack = createNativeStackNavigator();
  const colorScheme = useColorScheme();

  useEffect(() => {
    StatusBar.setBackgroundColor('transparent');
    StatusBar.setTranslucent(true);
  }, []);

  return (
    <NavigationContainer
      theme={{
        dark: colorScheme === 'dark',
        colors: COLORS[colorScheme ?? 'dark'],
      }}>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
