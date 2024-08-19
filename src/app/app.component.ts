import { Compra, Produtos, ProdutosComprados } from './../beans/VP_BPM';
import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem, PrimeNGConfig, MessageService } from 'primeng/api';
import { Familia, Origem, VP_BPM } from 'src/beans/VP_BPM';
import * as fd from 'src/functions/Form_Design';
import { Data, Info } from 'src/beans/Workflow';
import axios from 'axios';
import { Messages } from 'primeng/messages';
import { AppService } from './app.service';
import { ws_beans_header } from 'src/beans/WS_Beans';
import { formatDateToData } from 'src/functions/General_Functions';
import { exportaFamilias, exportaOrigens, exportaSugestao, geraSugestoes } from 'src/functions/WS_Axios';

declare var workflowCockpit: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService],
})
export class AppComponent {
  @ViewChild(Messages) msg!: Messages;
  public title = 'ProjetoPadrao';
  checked: boolean = false;
  public resto = 0;
  public menus: MenuItem[] = fd.Menus;
  public activeMenu: MenuItem = {};
  public panel = fd.Panels;
  public hideButtons: boolean = false;
  public dateSugestao: Date = new Date();
  public format = formatDateToData;
  public dataSugestao: string = this.format(new Date());
  public periodos: any = [];
  public selectedColumns: any = []
  public selectedProducts: any = []
  public alterando = false;
  public vp: VP_BPM = new VP_BPM();
  public produtos: Produtos[] = [];
  public origens: Origem[] = [];
  public origem!: Origem;
  public origemModal = false;
  public desOri = '';
  public codOri = '';
  public familias!: Familia[];
  public selectedFamilias!: Familia[];
  public compras: Compra[] = [];
  public showObs = false;
  public obsSol = '';
  constructor(
    public translate: TranslateService,
    public primeNGConfig: PrimeNGConfig,
    public messageService: MessageService,
    private service: AppService
  ) {
    translate.addLangs(['pt']);
    translate.setDefaultLang('pt');
    translate.use('pt');
    this.translate
      .stream('primeng')
      .subscribe((data) => this.primeNGConfig.setTranslation(data));
      this.service.acao$.subscribe(async (retorno) => {
        if (retorno) {
          this.vp.token = retorno;
          this.vp.token = `Bearer ${this.vp.token}`;
          ws_beans_header.headers!['Authorization'] = this.vp.token;
          console.log(ws_beans_header);
          let body = {
            codEmp: 1
          }
          let c = await exportaOrigens(JSON.stringify(body))

          console.log(c.origens);

          this.origens = c.origens;
        } else {
          this.messageService.clear();
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Não foi possivel obter o usuário Token',
          });
        }
      });
  }

  public async ngOnInit(): Promise<void> {
    axios.interceptors.request.use(
      (config: any) => {
        this.vp.Buscando_WS = true;
        return config;
      },
      (error: any) => {
        this.vp.Buscando_WS = false;
        return Promise.reject(error);
      }
    );
    axios.interceptors.response.use(
      (response: any) => {
        this.vp.Buscando_WS = false;
        return response;
      },
      (error: any) => {
        this.vp.Buscando_WS = false;
        return Promise.reject(error);
      }
    );




    this.activeMenu = fd.showMenus(1, [1, 2, 3, 4]);

  }

  public origemInput() {
    this.origemModal = true;
  }

  public mostrarObservacao() {
    this.showObs = true;
  }

  public async origemSelect() {
    this.selectedFamilias = [];
    this.codOri = this.origem.codOri;
    this.desOri = this.origem.desOri;
    this.origemModal = false;

    let body = {
      codEmp: 1,
      codOri: this.codOri
    }

    let f = await exportaFamilias(JSON.stringify(body))
    this.familias = f.familias
    console.log(f)
  }

  public async pesquisar() {
    this.produtos = []
    this.periodos = []
    this.selectedProducts = [];
    let body = {
      codEmp: 1,
      datSug: this.dataSugestao,
      origens: this.origem,
      familias: this.selectedFamilias,
      filtros: {}
    }
    console.log(body)
    let r = await exportaSugestao(JSON.stringify(body));
    this.vp.Buscando_WS = true;

    if(r.codRet != 1) {
      for(let pro of r.sugestoes) {
        pro.codPro = pro.codPro.replace(/'/g, "");
        this.produtos.push(pro);
      }
      this.produtos[0].datas.forEach(dat => {
        let data = {
           selecionado: false,
           periodo: dat.nomMes
         }
          this.periodos.push(data);
       });

       console.log(this.periodos);
    }
    else {
      window.alert(r.msgRet);
    }
     this.vp.Buscando_WS = false;
  }

  public async cadastrar() {
    this.compras = [];
    for(let i = 0; i < this.periodos.length; i++) {
      if(this.periodos[i].selecionado) {
        const compra: Compra = {
          mesCmp: this.periodos[i].periodo,
          produtos: []
        }
        for(let pro of this.selectedProducts) {
          if (pro.datas[i].cprMes > 0) {
            let produto = {
              codPro: pro.codPro,
              codDer: pro.codDer,
              qtdCmp: pro.datas[i].cprMes
            }
            compra.produtos!.push(produto)
          }
        }
        if(compra.produtos!.length > 0 )
        this.compras.push(compra)
      }
    }
    let body = {
      codEmp: 1,
      datSug: this.dataSugestao,
      compras: this.compras,
      obsSol: this.obsSol
    }
    this.showObs = false;
    let r = await geraSugestoes(JSON.stringify(body));

    console.log(r)
    if(r.codRed == 1)
      this.messageService.add({ severity: 'error', summary: 'Erro ao integrar!', detail: r.msgRet });
    else
    this.messageService.add({ severity: 'success', summary: 'Solicitações Geradas com Sucesso!', detail: r.msgRet });
    this.pesquisar();
  }


  public alterandoQuantidade(produto: any, index: number, quantidade: number, produtoIndex: number) {
    console.log(index)
    console.log(produto.datas.length)
  var alterando
    for(let i = index; i < produto.datas.length; i++) {
      alterando = false;
      if(i == index) {
        this.resto = quantidade - produto.datas[i].sugMes;
      } else {
        if(this.resto !== produto.datas[i].sugMes)
        this.resto = this.resto - produto.datas[i].sugMes;
        else {
        produto.datas[i].cprMes = 0;
        this.resto = 0;
        }
        if(this.resto > 0) {
          produto.datas[i].cprMes = 0;
        }
        if(this.resto < 0) {
          produto.datas[i].cprMes = this.resto * -1;
          this.resto = 0;
        }
      }
    }
    this.produtos[produtoIndex] = produto;
  }
}
