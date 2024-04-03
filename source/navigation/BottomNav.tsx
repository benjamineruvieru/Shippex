import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Colors from '../constants/Colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Platform} from 'react-native';
import ShipmentScreen from '../features/bottomtabs/shipments/screens/ShipmentScreen';

//Icons
import ShipmentIcon from '../assets/svg/bottomtabs/shipment.svg';
import ScanIcon from '../assets/svg/bottomtabs/scan.svg';
import WalletIcon from '../assets/svg/bottomtabs/wallet.svg';
import ProfileIcon from '../assets/svg/bottomtabs/profile.svg';

export type RootStackParamList = {
  ShipmentScreen: {};
};

const Tab = createBottomTabNavigator();

const BlankScreen = () => {
  return null;
};

export default function BottomNav() {
  const insets = useSafeAreaInsets();

  const screenOptions = {
    header: () => null,
    tabBarHideOnKeyboard: true,
    tabBarActiveTintColor: Colors.primary,
    tabBarInactiveTintColor: Colors.tabBlur,
    tabBarLabelStyle: {
      fontFamily: 'Gilroy-Medium',
      fontSize: 12,
    },
    tabBarStyle: {
      height: Platform.OS === 'android' ? 60 : 55 + insets.bottom,
      paddingBottom: Platform.OS === 'android' ? 5 : insets.bottom - 5,
      paddingTop: Platform.OS === 'ios' ? 5 : 0,
      // backgroundColor: Colors.tabColor,
      borderTopWidth: 0,
    },
  };
  return (
    <Tab.Navigator backBehavior="history" screenOptions={screenOptions}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <ShipmentIcon width={23} height={23} color={color} />
          ),
        }}
        name="Shipments"
        component={ShipmentScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <ScanIcon width={23} height={23} color={color} />
          ),
        }}
        name="Scan"
        component={BlankScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <WalletIcon width={23} height={23} color={color} />
          ),
        }}
        name="Wallet"
        component={BlankScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <ProfileIcon width={23} height={23} color={color} />
          ),
        }}
        name="Profile"
        component={BlankScreen}
      />
    </Tab.Navigator>
  );
}
