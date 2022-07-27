import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Login, Recipe} from '../screens';
import BottomTabsNavigator from './BottomTabsNavigator';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Login'}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={BottomTabsNavigator} />
      <Stack.Screen name="Recipe" component={Recipe} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
