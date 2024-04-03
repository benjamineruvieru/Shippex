import axios, {AxiosInstance} from 'axios';
import {getItem} from '../services/storage';

export const BASEURL = 'https://api.kicksciti.com/v1';

export const axiosBase = (): AxiosInstance => {
  const token = getItem('token');
  if (!token) {
    setTimeout(axiosBase, 2000);
    return {} as AxiosInstance;
  }
  const axiosinstance = axios.create({
    baseURL: BASEURL,
    headers: {Authorization: `Bearer ${token}`},
  });

  return axiosinstance;
};
