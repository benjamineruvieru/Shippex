import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {RegularText} from '../../../components/Text';

const CancelButton = () => {
  return (
    <TouchableOpacity>
      <RegularText>Cancel</RegularText>
    </TouchableOpacity>
  );
};

export default CancelButton;

const styles = StyleSheet.create({});
