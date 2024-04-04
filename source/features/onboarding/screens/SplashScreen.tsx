import {
  Animated,
  Easing,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image,
  View,
  Platform,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../constants/Variables';
import LayoutAnimationComponent from '../../../components/LayoutAnimationComponent';
import Button from '../../../components/Button';
import Colors from '../../../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp, RootStackParamList} from '../../../navigation/StackNav';
import {Modalize} from 'react-native-modalize';
import Login from '../../auth/components/Login';
import {getPercentHeight} from '../../../utilis/helper_functions';

const logo = require('../../../assets/images/logobottom.png');
const logohead = require('../../../assets/images/logohead.png');
const logotext = require('../../../assets/images/white-logo-text.png');

const LoginView = ({setModalOpen}: {setModalOpen: (arg: boolean) => void}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const modalRef: any = useRef();

  const onLoginPress = () => {
    if (Platform.OS === 'ios') {
      navigation.navigate('LoginScreen');
    } else {
      modalRef?.current?.open();
    }
  };

  const styles = StyleSheet.create({
    flexView: {
      flex: 1,
    },
    image: {aspectRatio: 23 / 4, height: 36, alignSelf: 'center'},
    textStyle: {color: Colors.primary},
  });

  return (
    <SafeAreaView style={styles.flexView}>
      <View style={styles.flexView} />
      <LayoutAnimationComponent delay={1000}>
        <Image source={logotext} style={styles.image} />
      </LayoutAnimationComponent>
      <View style={styles.flexView} />
      <LayoutAnimationComponent delay={1500}>
        <Button
          width={'90%'}
          title="Login"
          style={{backgroundColor: 'white'}}
          textStyle={styles.textStyle}
          bottom={30}
          onPress={onLoginPress}
        />
      </LayoutAnimationComponent>
      <Modalize
        modalStyle={{width: SCREEN_WIDTH, left: -20}}
        withHandle={false}
        modalHeight={getPercentHeight(98)}
        onOpen={() => {
          if (Platform.OS === 'android') {
            setTimeout(() => setModalOpen(true), 300);
            StatusBar.setBackgroundColor('transparent');
            StatusBar.setBarStyle('light-content');
          }
        }}
        onClose={() => {
          if (Platform.OS === 'android') {
            StatusBar.setBackgroundColor(Colors.primary);
            StatusBar.setBarStyle('dark-content');
            setModalOpen(false);
          }
        }}
        ref={modalRef}
        overlayStyle={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}
        customRenderer={
          <Animated.View style={{flex: 1}}>
            <Login
              onClose={() => {
                modalRef?.current?.close();
              }}
            />
          </Animated.View>
        }
      />
    </SafeAreaView>
  );
};

interface SplashScreenProps {}

interface LogoAnimationProps {
  size: Animated.Value;
  transX: Animated.Value;
  transY: Animated.Value;
  scale: Animated.Value;
  opacity: Animated.Value;
}

const SplashScreen: React.FC<SplashScreenProps> = () => {
  const [splashEnd, setSplashEnd] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const logoAnimation = useRef<LogoAnimationProps>({
    size: new Animated.Value(36),
    transX: new Animated.Value(0),
    transY: new Animated.Value(0),
    scale: new Animated.Value(1),
    opacity: new Animated.Value(0),
  }).current;

  const splashAnimationSequence = (): Animated.CompositeAnimation => {
    return Animated.sequence([
      Animated.timing(logoAnimation.size, {
        toValue: 144,
        useNativeDriver: false,
        easing: Easing.ease,
      }),
      Animated.delay(1000),
      Animated.parallel([
        Animated.timing(logoAnimation.transX, {
          toValue: -SCREEN_WIDTH,
          useNativeDriver: false,
          easing: Easing.ease,
        }),
        Animated.timing(logoAnimation.transY, {
          toValue: -SCREEN_HEIGHT,
          useNativeDriver: false,
          easing: Easing.ease,
        }),
        Animated.timing(logoAnimation.scale, {
          toValue: 9,
          useNativeDriver: false,
          easing: Easing.ease,
          duration: 250,
        }),
      ]),
    ]);
  };

  const loginAnimation = (): Animated.CompositeAnimation => {
    return Animated.timing(logoAnimation.opacity, {
      toValue: 1,
      useNativeDriver: true,
      duration: 100,
    });
  };

  useEffect(() => {
    const animation = splashAnimationSequence();
    animation.start();
    setTimeout(() => {
      loginAnimation().start(() => {
        setSplashEnd(true);
        if (Platform.OS === 'android') {
          StatusBar.setBackgroundColor(Colors.primary);
          StatusBar.setBarStyle('dark-content');
        }
      });
    }, 1600);
  }, []);

  const styles = StyleSheet.create({
    mainView: {
      backgroundColor: splashEnd ? 'black' : 'white',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logohead: {
      height: logoAnimation.size,
      width: logoAnimation.size,
      position: 'absolute',
      zIndex: 1,
      transform: [{scale: logoAnimation.scale}],
    },
    logobody: {
      height: logoAnimation.size,
      width: logoAnimation.size,
      transform: [
        {translateX: logoAnimation.transX},
        {translateY: logoAnimation.transY},
      ],
    },
    loginMainView: {
      position: 'absolute',
      width: modalOpen ? SCREEN_WIDTH - 40 : SCREEN_WIDTH,
      height: getPercentHeight(modalOpen ? 99 : 100),
      bottom: 0,
      backgroundColor: Colors.primary,
      opacity: logoAnimation.opacity,
      borderRadius: modalOpen ? 20 : 0,
      zIndex: 1,
    },
  });

  return (
    <View style={styles.mainView}>
      {!splashEnd && (
        <View>
          <Animated.Image source={logohead} style={styles.logohead} />
          <Animated.Image source={logo} style={styles.logobody} />
        </View>
      )}
      <Animated.View style={styles.loginMainView}>
        {splashEnd && <LoginView {...{setModalOpen}} />}
      </Animated.View>
    </View>
  );
};

export default SplashScreen;
