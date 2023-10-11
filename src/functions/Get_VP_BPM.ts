import { AnexoFile, VP_BPM } from 'src/beans/VP_BPM';

export default function getVP(vp: VP_BPM, map: Map<any, any>): VP_BPM {
  vp.GED_pasta_codigo = map.get('GED_pasta_codigo');
  vp.anexo_id = map.get('anexo_id');

  vp.anexo_files2_string = map.get('anexo_files2_string');

  vp.anexo_files2 = JSON.parse(vp.anexo_files2_string)

  return vp;
}
