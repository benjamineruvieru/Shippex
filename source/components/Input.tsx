import {
  KeyboardTypeOptions,
  LayoutAnimation,
  NativeSyntheticEvent,
  Pressable,
  ReturnKeyTypeOptions,
  StyleSheet,
  TextInput,
  TextInputKeyPressEventData,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {FC, useState} from 'react';
import {MediumText, RegularText, SmallText} from './Text';
import {SCREEN_WIDTH, isPhone} from '../constants/Variables';
import Colors from '../constants/Colors';

interface InputProps {
  style?: ViewStyle;
  bottom?: number;
  placeholder?: string;
  placeholderText?: string;
  inputStyle?: TextStyle;
  password?: boolean;
  keyboard?: KeyboardTypeOptions;
  handleKeyPress?: (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ) => void | undefined;
  multiline?: boolean;
  returnKeyType?: ReturnKeyTypeOptions;
  onSubmitEditing?: () => void;
  text: string;
  setText: (text: string) => void;
  maxLength?: number;
  editable?: boolean;
  testID?: string;
}

const Input: FC<InputProps> = ({
  style,
  bottom = 30,
  placeholder,
  placeholderText,
  inputStyle,
  password,
  keyboard = 'default',
  handleKeyPress,
  multiline,
  returnKeyType,
  onSubmitEditing,
  text,
  setText,
  maxLength,
  editable,
  testID,
}) => {
  const [focused, setFocused] = useState(false);

  const styles = StyleSheet.create({
    input: {
      color: Colors.primary,
      flex: 1,
      fontFamily: 'SF Pro Display Semibold',
      fontSize: 17,
      height: 30,
      paddingVertical: 0,
      marginTop: 5,
      ...inputStyle,
    },
    mainView: {
      borderWidth: focused ? 1 : 0,
      borderColor: Colors.primary,
      marginBottom: bottom,
      backgroundColor: Colors.inputBg,
      height: 60,
      borderRadius: 12,
      paddingHorizontal: 15,
      justifyContent: 'center',

      paddingVertical: 8,
      ...style,
    },
  });

  return (
    <>
      <Pressable
        onPress={() => {
          setFocused(true);
        }}
        style={styles.mainView}>
        <RegularText
          style={{fontSize: focused || text ? 13 : 17}}
          color="#A7A3B3">
          {placeholderText}
        </RegularText>
        {(focused || text) && (
          <TextInput
            autoFocus
            onFocus={() => {
              setFocused(true);
            }}
            onBlur={() => {
              setFocused(false);
            }}
            testID={testID}
            editable={editable}
            maxLength={maxLength}
            value={text}
            cursorColor={Colors.primary}
            selectionColor={Colors.primary}
            onChangeText={setText}
            returnKeyType={returnKeyType}
            multiline={multiline}
            keyboardType={keyboard}
            secureTextEntry={password}
            placeholder={placeholder}
            placeholderTextColor={'#FFFFFF50'}
            style={styles.input}
            onKeyPress={handleKeyPress}
            onSubmitEditing={onSubmitEditing}
          />
        )}
      </Pressable>
    </>
  );
};

export default Input;

const styles = StyleSheet.create({});
