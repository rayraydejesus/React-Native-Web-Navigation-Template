/************* Imports **************/
import React from 'react';

// CONFIG: React Navigation setup wrapper
import type { RootStackParams } from './RootStackParams';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";

import SplashScreen from '../../screens/SplashScreen';
import AppTabs from '../../screens/AppTabs';

/************* Setup **************/
type RootStackProps = NativeStackNavigationProp<RootStackParams>;
const RootStack = createNativeStackNavigator<RootStackParams>();

const RootStackNavigator = () => {
  return(
      <NavigationContainer>
      <RootStack.Navigator 
        initialRouteName = 'Splash' 
        screenOptions={{
             headerShown: false
         }}
      >
        <RootStack.Screen name = 'Splash' component = {SplashScreen}/>
        <RootStack.Screen name = 'AppTabs' component = {AppTabs}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
export type { RootStackProps };
