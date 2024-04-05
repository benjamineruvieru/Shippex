import {
  ActivityIndicator,
  Animated,
  DeviceEventEmitter,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {ReactNode, useEffect, useRef, useState} from 'react';
import {
  RegularText,
  RegularTextB,
  SmallText,
  SmallTextB,
} from '../../../../components/Text';
import Checkbox from '../../../../components/Checkbox';
import Colors from '../../../../constants/Colors';
import RightSvg from '../../../../assets/svg/icons/right.svg';
import ExpandSvg from '../../../../assets/svg/icons/expand.svg';
import {useApi} from '../../../../hooks/useApi';
import {getShipments} from '../../../../api/shipment';
import {isPhone} from '../../../../constants/Variables';

const box = require('../../../../assets/images/box.png');

const Head = () => {
  const [selected, setSelected] = useState(false);
  const toggle = () => {
    setSelected(prev => {
      DeviceEventEmitter.emit('markAll', !prev);

      return !prev;
    });
  };
  return (
    <View style={styles.headMainView}>
      <RegularTextB>Shipments</RegularTextB>
      <TouchableOpacity onPress={toggle} style={styles.selAllView}>
        <Checkbox onPress={toggle} value={selected} setValue={setSelected} />
        <RegularText color={Colors.primary}>Mark All</RegularText>
      </TouchableOpacity>
    </View>
  );
};

const OrderStatus = () => {
  return (
    <View style={styles.orderStatusMainView}>
      <View style={styles.orderStatusButton}>
        <SmallText>RECEIVED</SmallText>
      </View>
    </View>
  );
};

const OrignInfo = () => {
  return (
    <View>
      <SmallText color={Colors.primary}>Origin</SmallText>
      <RegularText style={{fontSize: 20, color: 'black'}}>Cairo</RegularText>
      <RegularText>Dokki, 22 Nile St.</RegularText>
    </View>
  );
};

const DestInfo = () => {
  return (
    <View>
      <SmallText color={Colors.primary}>Destination</SmallText>
      <RegularText style={{fontSize: 20, color: 'black'}}>
        Alexandria
      </RegularText>
      <RegularText>Smoha, 22 max St.</RegularText>
    </View>
  );
};

const ExtraInfo = () => {
  const localStyles = StyleSheet.create({
    extraInfoMainView: {
      backgroundColor: '#F9F8Fb',

      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
    },
    extraInfoInnerView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      paddingTop: 10,
    },
    actionButtons: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingTop: 20,
      paddingBottom: 10,
      paddingHorizontal: 10,
    },
  });
  return (
    <View style={localStyles.extraInfoMainView}>
      <View style={{height: 3, overflow: 'hidden'}}>
        <View
          style={{
            borderColor: 'white',
            width: '100%',
            borderWidth: 3,
            borderStyle: 'dashed',
          }}
        />
      </View>
      <View style={localStyles.extraInfoInnerView}>
        <OrignInfo />
        <RightSvg width={20} height={20} />
        <DestInfo />
      </View>
      <View style={localStyles.actionButtons}>
        <TouchableOpacity
          style={{
            backgroundColor: '#6E91EC',
            marginRight: 15,
            flex: 1.2 / 4,
            justifyContent: 'center',
            alignItems: 'center',
            height: 40,
            borderRadius: 10,
          }}>
          <RegularText color="white">Call</RegularText>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#25D366',
            flex: 1.6 / 4,
            justifyContent: 'center',
            alignItems: 'center',
            height: 40,
            borderRadius: 10,
          }}>
          <RegularText color="white">WhatsApp</RegularText>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const ItemWrapper = ({children}: {children: ReactNode}) => {
  const [selected, setSelected] = useState(false);
  const [extraOpen, setExtraOpen] = useState(false);
  const extraheight = useRef(0);

  useEffect(() => {
    const myEvent = DeviceEventEmitter.addListener('markAll', event => {
      console.log('markAll', event);
      setSelected(event);
    });
    return () => myEvent.remove();
  }, []);
  const height = useRef(new Animated.Value(0)).current;

  const toggleOpen = () => {
    setExtraOpen(p => {
      if (p) {
        Animated.timing(height, {
          toValue: 0,
          useNativeDriver: false,
          duration: 150,
        }).start();
      } else {
        Animated.timing(height, {
          toValue: extraheight.current,
          useNativeDriver: false,
          duration: 150,
        }).start();
      }
      return !p;
    });
  };

  const localStyles = StyleSheet.create({
    itemwrapperView: {
      backgroundColor: Colors.cyan,
      borderRadius: 10,

      borderColor: selected ? '#6E91EC' : 'white',
      borderWidth: 2,
      marginBottom: 10,
    },
    expandButton: {
      backgroundColor: extraOpen ? Colors.blue : 'white',
      height: 26,
      width: 26,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 360,
      borderWidth: 2,
      borderColor: extraOpen ? '#C8cef1' : 'white',
    },
    innerView: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
    aniView: {
      overflow: 'hidden',
      height,
    },
  });
  return (
    <View style={localStyles.itemwrapperView}>
      <View
        onLayout={event => {
          extraheight.current = event.nativeEvent.layout.height;
        }}
        style={{opacity: 0, position: 'absolute'}}>
        <ExtraInfo />
      </View>
      <View style={localStyles.innerView}>
        <Checkbox
          setValue={setSelected}
          value={selected}
          style={{backgroundColor: selected ? '#D9effd' : 'white'}}
        />
        {children}
        <TouchableOpacity onPress={toggleOpen} style={localStyles.expandButton}>
          <ExpandSvg color={!extraOpen ? Colors.primary : 'white'} />
        </TouchableOpacity>
      </View>
      <Animated.View style={localStyles.aniView}>
        <ExtraInfo />
      </Animated.View>
    </View>
  );
};

const ShipItem = ({item}: {item: {name: string}}) => {
  const {name} = item ?? {};
  return (
    <ItemWrapper>
      <Image source={box} style={styles.boximg} />
      <View>
        <SmallTextB>AWB</SmallTextB>
        <RegularTextB style={{fontSize: 23}}>{name}</RegularTextB>
        <View style={styles.destView}>
          <SmallText>Cario</SmallText>
          <RightSvg style={{marginHorizontal: 5}} />
          <SmallText>Alexandria</SmallText>
        </View>
      </View>
      <OrderStatus />
    </ItemWrapper>
  );
};
const Shipments = () => {
  const {data, isLoading} = useApi({
    queryFn: getShipments,
    queryKey: ['getShipments'],
  });

  return (
    <View style={{flex: 1}}>
      <Head />
      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator color={Colors.primary} />
        </View>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data?.message}
          renderItem={ShipItem}
        />
      )}
    </View>
  );
};

export default Shipments;

const styles = StyleSheet.create({
  selAllView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  boximg: {
    height: 40,
    width: 40,
    marginLeft: 5,
    marginRight: 10,
  },

  destView: {flexDirection: 'row', alignItems: 'center'},

  orderStatusMainView: {
    flex: 1,
    alignItems: isPhone ? 'center' : 'flex-end',
    paddingHorizontal: !isPhone ? 20 : 0,
  },
  orderStatusButton: {
    borderWidth: 1,
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 5,
    borderColor: 'white',
    backgroundColor: '#D9E6FD',
  },
});
