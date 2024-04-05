import {
  DeviceEventEmitter,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Modalize} from 'react-native-modalize';
import {RegularText, RegularTextB, SmallText} from '../../components/Text';
import Colors from '../../constants/Colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Button = ({
  text,
  sel,
  onPress,
}: {
  text: string;
  sel: boolean;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: Colors.cyan,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: sel ? Colors.primary : Colors.cyan,
        borderRadius: 10,
        marginRight: 15,
        marginBottom: 10,
      }}>
      <RegularText color={sel ? Colors.primary : undefined}>{text}</RegularText>
    </TouchableOpacity>
  );
};

const FilterModal = () => {
  const [selList, setSelList] = useState<string[]>([]);
  const modalRef = useRef();
  const insets = useSafeAreaInsets();
  const data = [
    'Received',
    'Putaway',
    'Delivered',
    'Canceled',
    'Rejected',
    'Lost',
    'On Hold',
  ];
  useEffect(() => {
    const myEvent = DeviceEventEmitter.addListener('openFilterModal', event => {
      modalRef?.current?.open();
    });
    return () => myEvent.remove();
  }, []);

  const closeModal = () => {
    modalRef?.current?.close();
  };

  const styles = StyleSheet.create({
    filterText: {
      fontSize: 20,
    },
    headView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingVertical: 15,
      marginTop: 15,
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: '#EAE7F2',
    },
    body: {
      padding: 20,
      paddingBottom: insets.bottom + 20,
    },
    listView: {
      flexDirection: 'row',
      paddingTop: 15,
      flexWrap: 'wrap',
    },
  });
  console.log(selList);
  return (
    <Modalize handlePosition="inside" adjustToContentHeight ref={modalRef}>
      <View style={styles.headView}>
        <RegularText
          onPress={() => {
            setSelList([]);
            closeModal();
          }}
          color={Colors.primary}>
          Cancel
        </RegularText>
        <RegularTextB style={styles.filterText}>Filters</RegularTextB>
        <RegularText onPress={closeModal} color={Colors.primary}>
          Done
        </RegularText>
      </View>
      <View style={styles.body}>
        <RegularText>SHIPMENT STATUS</RegularText>
        <View style={styles.listView}>
          {data.map(text => (
            <Button
              sel={selList.includes(text)}
              text={text}
              onPress={() => {
                setSelList(list => {
                  if (!list.includes(text)) {
                    list.push(text);
                    console.log("'" + text + "' added to the list.");
                  } else {
                    list = list.filter(item => item !== text);
                    console.log("'" + text + "' removed from the list.");
                  }

                  return [...list];
                });
              }}
            />
          ))}
        </View>
      </View>
    </Modalize>
  );
};

export default FilterModal;
