import {Alert, Platform, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Mainbackground from '../../../components/Mainbackground';
import {MediumText, RegularText} from '../../../components/Text';
import CancelButton from './CancelButton';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import {login} from '../../../api/auth';
import {showNotification} from '../../../utilis/helper_functions';
import {setItem} from '../../../services/storage';
import {useNavigation} from '@react-navigation/native';

const Login = ({onClose}: {onClose?: () => void}) => {
  const [usr, setUsr] = useState('');
  const [pwd, setPwd] = useState('');
  const [load, setLoad] = useState(false);

  const navigation = useNavigation();
  const loginFun = () => {
    setLoad(true);
    login({usr, pwd})
      .then(data => {
        const cookies = data.headers['set-cookie'];
        console.log('Cookies:', cookies);

        const {full_name} = data?.data;
        setItem('name', full_name);
        setItem('loggedIn', 'true');
        setItem('cookies', cookies, true);
        navigation.reset({
          index: 0,
          routes: [{name: 'BottomNav'}],
        });
      })
      .catch(err => {
        const {message} = err?.response?.data ?? {};
        console.log('err', err);
        console.log('err', err?.response?.data?.message);
        if (Platform.OS === 'ios') {
          Alert.alert(message);
        } else {
          showNotification({msg: message, error: true});
        }
      })
      .finally(() => {
        setLoad(false);
      });
  };
  return (
    <View style={{padding: 20, flex: 1}}>
      <View
        style={{
          backgroundColor: '#A7A3B3',
          width: 36,
          height: 5,
          borderRadius: 20,
          alignSelf: 'center',
          top: -10,
        }}
      />
      <CancelButton onClose={onClose} />
      <MediumText>Login</MediumText>
      <RegularText style={{marginTop: 10, marginBottom: 40}}>
        Please enter your First, Last name and your phone number in order to
        register
      </RegularText>
      <Input placeholderText="Username / Email" text={usr} setText={setUsr} />
      <Input placeholderText="Password" password text={pwd} setText={setPwd} />
      <View style={{flex: 1}} />
      <Button
        load={load}
        title="Login"
        bottom={10}
        disable={!usr || !pwd}
        onPress={loginFun}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
