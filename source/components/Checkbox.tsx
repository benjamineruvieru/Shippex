import {TouchableOpacity, ViewStyle} from 'react-native';
import React, {Dispatch, SetStateAction} from 'react';
import Colors from '../constants/Colors';
import Tick from '../assets/svg/icons/tick.svg';

const Checkbox = ({
  value,
  setValue,
  style,
  onPress,
}: {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  style?: ViewStyle;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (onPress) {
          onPress();
        } else {
          setValue((p: boolean) => !p);
        }
      }}
      style={{
        borderWidth: 1.5,
        height: 19,
        width: 19,
        borderColor: value ? '#6E91EC' : '#D0D5DD',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: value ? '#D9effd' : 'transparent',
        marginRight: 5,
        ...style,
      }}>
      {value && <Tick strokeWidth={2} color={'#6E91EC'} />}
    </TouchableOpacity>
  );
};

export default Checkbox;
