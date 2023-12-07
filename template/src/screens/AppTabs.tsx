/************* Imports **************/
import React from 'react';

import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

// CONFIG: React Navigation botom tab setup
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab from './tabs/HomeTab';
import PostTab from './tabs/PostTab';
import SettingsTab from './tabs/SettingsTab';

/************* Setup **************/
//CONFIG: React Navigation Bottom Tabs setup
const Tab = createBottomTabNavigator();

/************* RETURN **************/
const AppTabs = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName : string = '';

        if (route.name === 'Home')
          iconName = focused ? 'house' : 'house';
        else if (route.name === 'Post')
          iconName = focused ? 'plus' : 'plus';
        else if (route.name === 'Settings')
          iconName = focused ? 'gears' : 'gears';
        else
          iconName = focused ? 'circle-xmark' : 'circle-xmark';

        // You can return any component that you like here!
        return <FontAwesome6 name={iconName} size={size} color={color} solid/>;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Post" component={PostTab} />
      <Tab.Screen name="Settings" component={SettingsTab} />
    </Tab.Navigator>
  )
};

export default AppTabs;