import { AxiosRequestConfig } from 'axios';

export const axios_header_token: AxiosRequestConfig<string> = {
  headers: {
    Authorization: '',
    'Content-Type': 'application/json',
  },
};
