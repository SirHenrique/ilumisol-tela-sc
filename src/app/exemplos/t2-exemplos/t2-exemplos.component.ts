import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';
import * as gedf from 'prisma_prismafunctions';
import { FileUpload } from 'primeng/fileupload';
import { LazyLoadEvent } from 'primeng/api';
import { Filtro, JSONQuery } from 'src/functions/Table_LazyLoad';
import { PastaService, AppService } from '../../app.service'
import { environment } from 'src/environments/environment';
import { Servicos } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t2-exemplos',
  templateUrl: './t2-exemplos.component.html',
  styleUrls: ['./t2-exemplos.component.scss'],
})
export class T2ExemplosComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public STEP = environment.tarefa();

  public readonlyHideComponent: boolean = false;

  private anexos_ged_temp: gedf.Anexo[] = [];

  constructor(private pastaService: PastaService, private ap: AppService) {
    switch (this.STEP) {
      case environment.s1_etapa1:
        this.readonlyHideComponent = false;
        break;
    }
  }

  public ngOnInit(): void { }

  public sn = gedf.simplifyName;
  public fb = gedf.formatBytes;
  public ct = gedf.checkEnviadoTemplate;

  /**
   * Métodos para manipular os anexos
   */
  public escolherDocumentoFileUpload = (anexosUploader: FileUpload) =>
    (this.vp.anexo_files = anexosUploader.files);

  public removerDocumentoFileUpload = (
    event: any,
    file: File,
    anexosUploader: FileUpload
  ): void => {
    const index = anexosUploader.files.indexOf(file);
    anexosUploader.remove(event, index);
    this.vp.anexo_files = anexosUploader.files;
  };

  public descarregarDocumentoGED = async (id: string) => {
    window.open(await gedf.requestDocumentDownload(id, this.vp.token));
  };

  public excluirDocumentoGED = async (anexo: gedf.Anexo) => {
    if (await gedf.deleteDocument(anexo.gedId!, this.vp.token)) {
      this.vp.anexo_ged = this.vp.anexo_ged.filter(
        (x) => anexo.gedId !== x.gedId
      );
      if (this.vp.anexo_ged.length == 0) this.vp.anexo_id = '';
    }
  };

  private recarregarDocumentosGED = async () => {
    if (this.vp.anexo_id != '')
      this.vp.anexo_ged = (
        await gedf.folderList(0, this.vp.token, this.vp.anexo_id)
      ).files.map(
        (d): gedf.Anexo => ({
          gedId: d.id,
          arquivoGED: d,
          enviado: true,
          estadoGED: d.status == 'PUBLISHED' ? 'Publicado' : 'Pendente',
          classTemplateGED:
            d.status == 'PUBLISHED' ? 'bg-green-600' : 'bg-yellow-500',
        })
      );
  };

  /**
   * Métodos para enviar os anexos ao GED.
   * Parte 1
   */
  public enviarDocumentos = async (
    anexosUploader: FileUpload
  ): Promise<void> => {
    console.log('entrounoenviar');
    await this.prepararDocumentos().catch(this.printError);
    const p = await this.pastaService.pegarPastas(this.vp, this.vp.ged_pasta_pai_nome);

    if (p) {
      this.vp.ged_pasta_pai_id = p.paiId;
      this.vp.GED_pasta_codigo_id = p.proId;
      this.vp.anexo_id = p.panId;
      if (this.anexos_ged_temp.length == (await this.processarDocumentosGED()))
        await this.recarregarDocumentosGED();
      anexosUploader.clear();
      this.vp.anexo_files = [];
    }
  };

  // Parte 2
  private prepararDocumentos = async (): Promise<void> => {
    this.anexos_ged_temp = [];

    for (let i in this.vp.anexo_files) {
      let f: File = this.vp.anexo_files[i];
      this.anexos_ged_temp.push({
        arquivoFile: f,
        simpleName: this.sn(f.name),
        enviado: this.ct(this.vp.anexo_ged, f.name),
      });
      const reader: FileReader = new FileReader();
      reader.readAsArrayBuffer(f);
      reader.onloadend = (e) => {
        this.anexos_ged_temp[i].byteArray = new Uint8Array(
          e.target?.result as ArrayBuffer
        );
      };
    }
  };

  // Parte 6
  private processarDocumentosGED = async (): Promise<number> => {
    var checkDocuments: number = 0;
    for (const i in this.anexos_ged_temp) {
      var a = this.anexos_ged_temp[i];
      console.log(a)
      if (a.enviado) checkDocuments++;
      else {
        await gedf
          .sendDocument(
            this.vp.anexo_id,
            a,
            this.vp.user_fullName,
            this.vp.token
          )
          .then((s) => {
            this.anexos_ged_temp[i] = s;
            checkDocuments++;
          })
          .catch(this.printError);
      }
    }

    return checkDocuments;
  };

  private printError = (e: any): void => {
    console.error({ title: 'Anexos print_error', error: e });
  };

  //------------------------------------------------------------------------------

  public mostrar_modal: boolean = false;
  public pagina: number = 1;
  public linhas: number = 5;
  public total: number = 0;
  public filtros: Filtro[] = [];
  public ordem: string = '';
  public campo: string = '';
  public vacio: string = 'Carregando...';
  public linhaSelecionada = false;
  public descricaoPesquisado?: Servicos;
  public descricaoSelecionada: string = '';
  public servicos?: any;


  public clientesOnRowSelect(event: any) {
    this.linhaSelecionada = true;
  }

  public clientesOnRowUnselect(event: any) {
    this.linhaSelecionada = false;
  }

  public selecionarOnClick() {
    this.descricaoSelecionada = this.descricaoPesquisado?.desSer ?? ''
    this.mostrar_modal = false;
  }

  public cancelarOnClick() {
    this.mostrar_modal = false;
  }

  public async inputLazyLoad(e?: LazyLoadEvent) {
    this.mostrar_modal = true;

    const json = new JSONQuery();

    if (e) {
      this.linhas = e.rows ?? 0;
      this.pagina = (e.first ?? 0) / (e.rows ?? 0) + 1;

      if (e.filters) {

        this.filtros = []
        const filtersArray = Object.values(e.filters);
        let campo = ''
        let operador = ''
        let valor = ''

        for (const key in e.filters) {
          if (e.filters.hasOwnProperty(key)) {
            const index = filtersArray.indexOf(e.filters[key]);
            campo = key

            switch (e.filters[key].matchMode) {
              case 'startsWith':
                operador = 'INICIANDO'
                break;
              case 'contains':
                operador = 'CONTENDO'
                break;
              case 'notContains':
                operador = 'NÃO CONTENDO'
                break;
              case 'endsWith':
                operador = 'TERMINANDO'
                break;
              case 'equals':
                operador = 'IGUAL'
                break;
              case 'notEquals':
                operador = 'DIFERENTE'
                break;

            }
            valor = e.filters[key].value ?? ''

            if (e.filters[key].value) {
              this.filtros.push({ campo, operador, valor });
            }

          }
        }
      }

      if (e.sortField) {

        this.campo = e.sortField;
        this.ordem = `${e.sortOrder === 1 ? 'ASC' : 'Desc'}`;
      }
      else {
        this.ordem = '';
        this.campo = '';
      }
    }

    json.setPaginacao(this.pagina, this.linhas);
    if (this.filtros) json.adicionarFiltro(this.filtros);
    if (this.ordem != '' && this.campo != '') json.adicionarOrdenacao(this.ordem, this.campo);
    const r = await this.ap.exportaWS('ExportaContaContabil', json.toString());
    this.total = r.totReg;
    this.servicos = r.servicos
    console.log(this.servicos)

    if (r.servicos.length > 0) this.vp.show_servicos = r.servicos;
    else (this.vp.show_servicos = []), (this.vacio = r.msgRet);

  }
}
