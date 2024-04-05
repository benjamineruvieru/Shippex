import {
  DeviceEventEmitter,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../../../../constants/Colors';
import {RegularText} from '../../../../components/Text';
import FilterSvg from '../../../../assets/svg/icons/filter.svg';

const Filter = () => {
  const onPress = () => {
    DeviceEventEmitter.emit('openFilterModal');
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.view}>
      <FilterSvg style={{marginRight: 10}} />
      <RegularText style={{fontSize: 16}}>Filters</RegularText>
    </TouchableOpacity>
  );
};

export default Filter;

const styles = StyleSheet.create({
  view: {
    backgroundColor: Colors.cyan,
    flexDirection: 'row',

    paddingVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
    width: '48%',
    justifyContent: 'center',
    height: 44,
  },
});
