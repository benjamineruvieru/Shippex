import axios from 'axios';
import {BASEURL} from './base';

export const getShipments = async () => {
  const res = axios.get(`${BASEURL}/frappe.client.get_list`, {
    params: {doctype: 'AWB', fields: ['*']},
    // headers: {
    //   Cookie:
    //     'full_name=Tasty%20Test; sid=e5f0af2bc4055b6eff9db8dce62578964621dc3c13164a09b136acb9; system_user=yes; user_id=test%40brandimic.com; user_image=',
    //   'Content-Type': 'application/json',
    // },
    maxBodyLength: Infinity,
    maxContentLength: Infinity,
  });

  return (await res)?.data;
};
