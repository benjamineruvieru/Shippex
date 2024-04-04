import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {RegularText, SmallText} from '../../../components/Text';
import BackSvg from '../../../assets/svg/icons/back.svg';
import Colors from '../../../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp, RootStackParamList} from '../../../navigation/StackNav';

const CancelButton = ({onClose}: {onClose?: () => void}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      onPress={() => {
        if (onClose) {
          onClose();
        } else {
          navigation.goBack();
        }
      }}
      style={{flexDirection: 'row', marginBottom: 15, alignItems: 'center'}}>
      <BackSvg />
      <RegularText color={Colors.primary} style={{marginLeft: 6}}>
        Cancel
      </RegularText>
    </TouchableOpacity>
  );
};

export default CancelButton;

const styles = StyleSheet.create({});
