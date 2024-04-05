import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import SearchSvg from '../assets/svg/icons/search.svg';
import Colors from '../constants/Colors';
import CancelSvg from '../assets/svg/icons/cancel.svg';

const Search = () => {
  const [text, setText] = useState('');
  const [focused, setFocused] = useState(false);

  const styles = StyleSheet.create({
    mainView: {
      backgroundColor: '#F4F2F8',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 15,
      borderRadius: 12,
      paddingVertical: 10,
      height: 45,
      marginVertical: 20,
      borderWidth: 1,
      borderColor: text || focused ? Colors.primary : '#F4F2F8',
    },
    input: {
      paddingVertical: 0,
      marginLeft: 8,
      fontFamily: 'SF Pro Text Regular',
      fontSize: 17,
      flex: 1,
    },
  });
  return (
    <View style={styles.mainView}>
      <SearchSvg />
      <TextInput
        value={text}
        onChangeText={setText}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
        cursorColor={Colors.primary}
        selectionColor={Colors.primary}
        placeholder="Search"
        placeholderTextColor={'#A7A3B3'}
        style={styles.input}
      />
      {text && (
        <TouchableOpacity
          onPress={() => {
            setText('');
          }}>
          <CancelSvg />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Search;
