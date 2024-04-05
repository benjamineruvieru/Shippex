import axios from 'axios';
import {BASEURL} from './base';

interface LoginCredentials {
  usr: string;
  pwd: string;
}

export const login = ({usr, pwd}: LoginCredentials) => {
  const formData = new FormData();

  formData.append('usr', usr);
  formData.append('pwd', pwd);

  const config = {
    method: 'post',
    url: `${BASEURL}/login`,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    transformRequest: () => {
      return formData;
    },

    data: formData,
  };

  const response = axios.request(config);

  return response;
};
