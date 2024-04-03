import React from 'react';
import BottomNav from './BottomNav';
import LoginScreen from '../features/auth/screens/LoginScreen';
import SplashScreen from '../features/onboarding/screens/SplashScreen';
import WelcomeScreen from '../features/auth/screens/WelcomeScreen';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="BottomNav" component={BottomNav} />
    </Stack.Navigator>
  );
};

export default StackNav;
