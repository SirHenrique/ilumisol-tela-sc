import { VP_BPM } from 'src/beans/VP_BPM';
import { environment } from 'src/environments/environment';
import * as gedf from 'prisma_prismafunctions';

export async function pegarPastas(vp: VP_BPM, pan?: string) {
  // Parte 3
  const paiId: string = await gedf.checkFolder(
    vp.token,
    {
      name: vp.ged_pasta_pai_nome,
      description: vp.ged_pasta_pai_nome,
      permissions: environment.gedpapel,
      inheritedPermission: true,
    },
    ''
  );
  if (paiId == '') {
    return;
  }

  // Parte 4
  const proId: string = await gedf.checkFolder(
    vp.token,
    {
      name: vp.GED_pasta_codigo,
      description: vp.ged_pasta_pai_id,
      parent: paiId,
      permissions: environment.gedpapel,
      inheritedPermission: true,
    },
    paiId
  );
  if (proId == '') {
    return;
  }

  if (pan) {
    // Parte 5
    const panId: string = await gedf.checkFolder(
      vp.token,
      {
        name: pan,
        description: pan,
        parent: proId,
        permissions: environment.gedpapel,
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
