import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View} from 'react-native';

import {Home} from '../screens';
import {COLORS, icons} from '../constants';
import {TabIcon} from '../components';

const Tab = createBottomTabNavigator();

const tabBarIcon = {
  Home: icons.home,
  Search: icons.search,
  Bookmark: icons.bookmark,
  Settings: icons.settings,
};

const screenOptions = ({route}) => {
  const iconName = tabBarIcon[route.name];

  let content = {
    tabBarIcon: ({focused}) => <TabIcon focused={focused} icon={iconName} />,
  };
  return {
    ...content,
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      elevation: 0,
      backgroundColor: COLORS.white,
      borderTopColor: 'transparent',
      height: 100,
    },
  };
};

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Home} />
      <Tab.Screen name="Bookmark" component={Home} />
      <Tab.Screen name="Settings" component={Home} />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
