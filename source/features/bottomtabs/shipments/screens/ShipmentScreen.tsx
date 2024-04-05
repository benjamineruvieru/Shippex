import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Mainbackground from '../../../../components/Mainbackground';
import PageHeader from '../components/PageHeader';
import Greetings from '../components/Greetings';
import Search from '../../../../components/Search';
import Scan from '../components/Scan';
import Filter from '../components/Filter';
import Shipments from '../components/Shipments';

const ShipmentScreen = () => {
  return (
    <Mainbackground insetsBottom={-1}>
      <PageHeader />
      <View style={styles.mainBody}>
        <Greetings />
        <Search />
        <View style={styles.scanfilterView}>
          <Filter />
          <Scan />
        </View>
        <Shipments />
      </View>
    </Mainbackground>
  );
};

export default ShipmentScreen;

const styles = StyleSheet.create({
  mainBody: {flex: 1, padding: 15, paddingBottom: 0},
  scanfilterView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
});
