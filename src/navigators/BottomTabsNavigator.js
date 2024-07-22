import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {theme} from '../utils/theme';
import HomeScreen from '../features/HomeScreen';
import MyBottomTabBar from '../components/bottomtabbar/MyBottomTabBar';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = props => {
  function commonStackNavigator() {
    return (
      <View style={[theme.flex1, theme.flexDirectionColumn]}>
        <Tab.Navigator
          initialRouteName="HomeStack"
          tabBar={tabBarProps => <MyBottomTabBar {...tabBarProps} />}
          screenOptions={{
            headerShown: false,
          }}>
          <Tab.Screen name="HomeStack" component={HomeScreen} />
          <Tab.Screen name="BuildingStack" component={HomeScreen} />
          <Tab.Screen name="QuadStack" component={HomeScreen} />
          <Tab.Screen name="AmenityStack" component={HomeScreen} />
          <Tab.Screen name="QuestionStack" component={HomeScreen} />
        </Tab.Navigator>
      </View>
    );
  }

  return commonStackNavigator();
};
