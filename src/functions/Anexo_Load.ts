import { ResponseLoadData } from 'src/beans/VP_BPM';
import { environment } from 'src/environments/environment';
import * as gedf from 'prisma_prismafunctions';

const STEP = environment.tarefa();

export default async function anexoLoad(rld: ResponseLoadData): Promise<void> {
  switch (STEP) {
    case environment.s1_etapa1:
      break;
    case environment.s2_etapa2:
      if (rld.vp.anexo_id != '') {
        rld.vp.anexo_ged = (
          await gedf.folderList(0, rld.vp.token, rld.vp.anexo_id)
        ).files.map(
          (d: any): gedf.Anexo => ({
            gedId: d.id,
            arquivoGED: d,
            enviado: true,
            estadoGED: d.status == 'PUBLISHED' ? 'Publicado' : 'Pendente',
            classTemplateGED:
              d.status == 'PUBLISHED' ? 'bg-green-600' : 'bg-yellow-500',
          })
        );
      }
      break;
  }
}
