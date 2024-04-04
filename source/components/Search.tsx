import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import SearchSvg from '../assets/svg/icons/search.svg';
import Colors from '../constants/Colors';
const Search = () => {
  return (
    <View style={styles.mainView}>
      <SearchSvg />
      <TextInput
        cursorColor={Colors.primary}
        selectionColor={Colors.primary}
        placeholder="Search"
        placeholderTextColor={'#A7A3B3'}
        style={styles.input}
      />
    </View>
  );
};

export default Search;

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
  },
  input: {
    paddingVertical: 0,
    marginLeft: 5,
    fontFamily: 'SF Pro Text Regular',
    fontSize: 17,
    flex: 1,
  },
});
