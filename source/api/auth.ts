import axios from 'axios';
import {BASEURL} from './base';

export const login = ({usr, pwd}) => {
  const formData = new FormData();

  formData.append('usr', usr);
  formData.append('pwd', pwd);

  console.log('form', formData);
  const config = {
    method: 'post',
    url: `${BASEURL}/login`,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    transformRequest: () => {
      return formData;
    },
    onUploadProgress: progressEvent => {
      console.log(progressEvent);
    },
    data: formData,
  };

  const response = axios.request(config);

  return response;
};
