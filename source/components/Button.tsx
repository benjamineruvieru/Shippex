import {
  ActivityIndicator,
  DimensionValue,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {SmallTextB} from './Text';
import Colors from '../constants/Colors';

interface ButtonProps {
  title: string;
  width?: DimensionValue;
  style?: ViewStyle;
  load?: boolean;
  onPress?: () => void;
  backgroundColor?: string;
  bottom?: number;
  top?: number;
  small?: boolean;
  disable?: boolean;
  grey?: boolean;
  isSec?: boolean;
  Icon?: React.ElementType;
  testID?: string;
  textStyle?: TextStyle;
}

const Button: React.FC<ButtonProps> = ({
  title,
  width = '100%',
  style,
  load,
  onPress,
  backgroundColor = Colors.primary,
  bottom = 0,
  top = 0,
  small,
  disable,
  grey,
  isSec,
  testID,
  textStyle,
}) => {
  const styles = StyleSheet.create({
    bg: {
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor,
      borderColor: Colors.primary,
      borderRadius: small ? 5 : 8,
      borderWidth: isSec ? 1 : 0,
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: bottom,
      marginTop: top,
      opacity: disable || load ? 0.5 : 1,
      padding: small ? 8 : load ? 17 : 20,
      width,
      ...style,
    },
  });

  return (
    <TouchableOpacity
      testID={testID}
      disabled={load || disable}
      style={styles.bg}
      onPress={onPress}>
      {load && <ActivityIndicator color={'white'} style={{right: 15}} />}
      <SmallTextB
        style={{
          color: 'white',
          fontFamily: 'SF Pro Text Bold',
          fontSize: 14,
          ...textStyle,
        }}>
        {title}
      </SmallTextB>
    </TouchableOpacity>
  );
};

export default Button;
