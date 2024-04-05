import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MediumText, RegularText, SmallText} from '../../../../components/Text';
import {getItem} from '../../../../services/storage';

const Greetings = () => {
  return (
    <View>
      <RegularText>Hello,</RegularText>
      <MediumText>{getItem('name')}</MediumText>
    </View>
  );
};

export default Greetings;

const styles = StyleSheet.create({});
