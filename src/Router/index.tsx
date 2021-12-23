import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import {Fire} from '../../config';
import {DetailPage, Home} from '../pages';

const Stack = createStackNavigator();
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

function MyTabs() {
  var color = 'white';
  var size = 24;
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: '#BEBAB3',
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={Home}
      
        options={{
        headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color, size}) => {
            const selected = focused ? '#E3562A' : '#BEBAB3';
            return <AntDesign name="book" color={selected} size={24} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color, size}) => {
            const selected = focused ? '#E3562A' : '#BEBAB3';
            return <AntDesign name="user" color={selected} size={24} />;
          },
        }}
      />
      <Tab.Screen
        name="SettingScreen"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color, size}) => {
            const selected = focused ? '#E3562A' : '#BEBAB3';
            return <AntDesign name="setting" color={selected} size={24} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={MyTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailPage"
        component={DetailPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
