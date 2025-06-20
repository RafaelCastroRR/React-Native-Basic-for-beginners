
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator2 = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home2" component={HomeScreen} />
      <Tab.Screen name="Cart2" component={CartScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator2;
