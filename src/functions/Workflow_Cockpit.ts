import { ResponseLoadData, VP_BPM } from 'src/beans/VP_BPM';
import { Info } from 'src/beans/Workflow';
import { axios_header_token } from 'src/beans/WS_Beans';
import { environment } from 'src/environments/environment';
import anexoLoad from './Anexo_Load';
import { getFormPresentation } from './Form_Presentation';
import getVP from './Get_VP_BPM';

const STEP = environment.tarefa();

declare var removeData: any;
declare var rollbackData: any;

export async function loadData(vp: VP_BPM, info: Info): Promise<ResponseLoadData> {
  var rld: ResponseLoadData = { initial: 1, tabs: [1, 2, 3], vp };

  rld.vp.user_fullName = (await info.getUserData()).fullname;

  const ptd = await info.getPlatformData();
  rld.vp.token = `bearer ${ptd.token.access_token}`;
  axios_header_token.headers!['Authorization'] = rld.vp.token;

  const ipv = await info.getInfoFromProcessVariables();
  if (STEP !== environment.s1_etapa1) {
    var map: Map<any, any> = new Map();
    for (let i of ipv) map.set(i.key, i.value);
    rld.vp = getVP(rld.vp, map);
  }
  rld = getFormPresentation(rld);
  anexoLoad(rld);

  return rld;
}

export function saveData(vp: VP_BPM): any {
  return { formData: vp };
}

export function rollback(data: any, info: any): any {
  if (info.isRequestNew()) return removeData(data.processInstanceId);
  return rollbackData(data.processInstanceId);
}
