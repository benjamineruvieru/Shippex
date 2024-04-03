import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Mainbackground from '../../../components/Mainbackground';
import {MediumText} from '../../../components/Text';
import CancelButton from './CancelButton';

const Login = () => {
  return (
    <View style={{padding: 20}}>
      <CancelButton />
      <MediumText>Login</MediumText>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
