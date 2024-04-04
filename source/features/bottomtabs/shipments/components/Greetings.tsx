import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MediumText, RegularText, SmallText} from '../../../../components/Text';

const Greetings = () => {
  return (
    <View>
      <RegularText>Hello,</RegularText>
      <MediumText>Benjamin Eruvieru</MediumText>
    </View>
  );
};

export default Greetings;

const styles = StyleSheet.create({});
