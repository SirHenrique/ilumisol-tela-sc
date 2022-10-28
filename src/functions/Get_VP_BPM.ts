import { VP_BPM } from 'src/beans/VP_BPM';

export default function getVP(vp: VP_BPM, map: Map<any, any>): VP_BPM {
  vp.GED_pasta_codigo = map.get('GED_pasta_codigo');
  vp.anexo_id = map.get('anexo_id');

  return vp;
}
