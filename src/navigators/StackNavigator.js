import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {default as React} from 'react';
import {BottomTabsNavigator} from './BottomTabsNavigator';

const Stack = createNativeStackNavigator();

export const StackNavigator = props => {
  return (
    <Stack.Navigator initialRouteName="BottomTabs">
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabsNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
