import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import BellSvg from '../../../../assets/svg/icons/bell.svg';
import {isPhone} from '../../../../constants/Variables';

const dp = require('../../../../assets/images/dp.png');

const logotext = require('../../../../assets/images/blue-logo-text.png');

const PageHeader: React.FC = () => {
  return (
    <View style={styles.mainView}>
      <TouchableOpacity>
        <Image source={dp} style={styles.dpImg} />
      </TouchableOpacity>
      <Image source={logotext} style={styles.img} />
      <TouchableOpacity style={styles.bellView}>
        <BellSvg />
      </TouchableOpacity>
    </View>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  img: {
    height: 16,
    width: isPhone ? '30%' : '17%',
    aspectRatio: 93 / 16,
  },
  dpImg: {
    height: 40,
    width: 40,
  },
  bellView: {
    height: 40,
    width: 40,
    backgroundColor: '#F4F2F8',
    borderRadius: 360,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
