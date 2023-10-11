import { VP_BPM } from 'src/beans/VP_BPM';

export default function getVP(vp: VP_BPM, map: Map<any, any>): VP_BPM {
  vp.GED_pasta_codigo = map.get('GED_pasta_codigo');

  vp.anexo_id = map.get('anexo_id');

  vp.anexo_files_sem_GED_txt = map.get('anexo_files_sem_GED_txt');

  vp.anexo_files_sem_GED = JSON.parse(vp.anexo_files_sem_GED_txt)

  return vp;
}
