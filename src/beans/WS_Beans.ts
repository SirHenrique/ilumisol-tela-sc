import { AxiosRequestConfig } from 'axios';

export const ws_beans_header: AxiosRequestConfig<string> = {
  headers: {
    Authorization: '',
    'Content-Type': 'application/json',
  },
};


export interface G5Response{
  codRet?: number;
  msgRet?: string;
  erroExecucao?: ErroExecucao;

  errorType?: string;
  errorCode?:string;
  errorMessage?: string;
  stackTrack?: string;
}

interface ErroExecucao{
  'xsi:nil': boolean;
  'xmlns:xsi': string;
}
