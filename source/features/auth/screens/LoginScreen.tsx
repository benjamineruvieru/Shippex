import {Keyboard, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Login from '../components/Login';

const LoginScreen = () => {
  return (
    <Pressable style={{flex: 1}} onPress={() => Keyboard.dismiss()}>
      <Login />
    </Pressable>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
