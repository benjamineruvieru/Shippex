import {DeviceEventEmitter} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../constants/Variables';

export const getPercentHeight = (percent: number) => {
  return (percent / 100) * SCREEN_HEIGHT;
};
export const getPercentWidth = (percent: number) => {
  return (percent / 100) * SCREEN_WIDTH;
};

export const showNotification = ({
  msg,
  error,
}: {
  msg: string;
  error?: boolean;
}) => {
  DeviceEventEmitter.emit('openNotification', {
    error,
    msg,
  });
};
