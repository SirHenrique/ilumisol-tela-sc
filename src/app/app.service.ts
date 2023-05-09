import { Injectable } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';
import { environment } from 'src/environments/environment';
import * as gedf from 'prisma_prismafunctions';
import { ResponseLoadData } from 'src/beans/VP_BPM';

const STEP = environment.tarefa();

@Injectable({
  providedIn: 'root'
})


export class PastaService {

  async pegarPastas(vp: VP_BPM, pan?: string) {
    const paiId: string = await gedf.checkFolder(
      vp.token,
      {
        name: vp.ged_pasta_pai_nome,
        description: vp.ged_pasta_pai_nome,
        permissions: environment.ged_papel,
        inheritedPermission: true,
      },
      ''
    );
    if (paiId == '') {
      return;
    }

    const proId: string = await gedf.checkFolder(
      vp.token,
      {
        name: vp.GED_pasta_codigo,
        description: vp.ged_pasta_pai_id,
        parent: paiId,
        permissions: environment.ged_papel,
        inheritedPermission: true,
      },
      paiId
    );
    if (proId == '') {
      return;
    }

    if (pan) {
      const panId: string = await gedf.checkFolder(
        vp.token,
        {
          name: pan,
          description: pan,
          parent: proId,
          permissions: environment.ged_papel,
          inheritedPermission: true,
        },
        proId
      );
      if (panId == '') {
        return;
      }
      return { paiId, proId, panId };
    }

    return { paiId, proId, panId: '' };
  }

  
  

}

export class AnexoService {
  async anexoLoad(rld: ResponseLoadData): Promise<void> {
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
}
