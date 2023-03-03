import { Message } from 'primeng/api';
import { Anexo } from 'prisma_prismafunctions';

// Crie aqui todas as váriaveis de processo
export interface ResponseLoadData {
  initial: number;
  tabs: number[];
  vp: VP_BPM;
}

export class VP_BPM {
  //Variáveis ​​Gerais
  public overlay: boolean = true;
  public buscandoWS: boolean = true;

  public alertas: Message[] = [];

  public date_now: Date = new Date();
  public date_max: Date = new Date(8640000000000000);

  public token: string = '';
  public user_fullName: string = '';
  public GED_pasta_codigo: string = '';
  public ged_pasta_pai_nome: string = 'Projeto Padrao';
  public GED_pasta_codigo_id: string = '';
  public ged_pasta_pai_id: string = '';

  public anexo_files: File[] = [];
  public anexo_ged: Anexo[] = [];
  public anexo_id: string = '';
  public anexo_nome: string = 'nome';
}
