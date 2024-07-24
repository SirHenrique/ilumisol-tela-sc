import axios, { AxiosResponse } from 'axios';
import * as wsb from 'src/beans/WS_Beans';
import { environment } from 'src/environments/environment';

const URL = environment.url_padrao;

export const exportaSugestao = async (body: string) =>
  (
    await axios.post<
      AxiosResponse<any>,
      AxiosResponse<any>
    >(
      `https://senior.ilumisol.com.br:8182/SXI/G5Rest?server=http://localhost:8081&module=sapiens&service=com.prisma.sugestaocompra&port=ExportaSugestoes&useAlwaysArray=true`,
      body,
      wsb.ws_beans_header
    )
  ).data;


