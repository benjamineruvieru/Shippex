import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {RegularText} from '../../../../components/Text';
import Colors from '../../../../constants/Colors';
import ScanSvg from '../../../../assets/svg/icons/scan.svg';

const Scan = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <ScanSvg style={{marginRight: 10}} />
      <RegularText style={{fontSize: 16}} color="white">
        Add Scan
      </RegularText>
    </TouchableOpacity>
  );
};

export default Scan;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    width: '48%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
  },
});
