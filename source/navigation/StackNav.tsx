import React from 'react';
import BottomNav from './BottomNav';
import LoginScreen from '../features/auth/screens/LoginScreen';
import SplashScreen from '../features/onboarding/screens/SplashScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParamList = {
  SplashScreen: undefined;
  LoginScreen: undefined;
  BottomNav: undefined;
};

export interface NavigationProp<ParamList extends RootStackParamList> {
  navigate: (
    screen: keyof ParamList,
    params?: ParamList[keyof ParamList],
  ) => void;
  goBack: () => void;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNav: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen
        options={{presentation: 'modal'}}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen name="BottomNav" component={BottomNav} />
    </Stack.Navigator>
  );
};

export default StackNav;
