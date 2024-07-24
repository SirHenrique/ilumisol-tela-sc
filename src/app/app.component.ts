import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem, PrimeNGConfig, MessageService } from 'primeng/api';
import { Produtos, VP_BPM } from 'src/beans/VP_BPM';
import * as fd from 'src/functions/Form_Design';
import { Data, Info } from 'src/beans/Workflow';
import axios from 'axios';
import { Messages } from 'primeng/messages';
import { AppService } from './app.service';
import { ws_beans_header } from 'src/beans/WS_Beans';
import { formatDateToData } from 'src/functions/General_Functions';
import { exportaSugestao } from 'src/functions/WS_Axios';

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
      // this.service.acao$.subscribe(async (retorno) => {
      //   if (retorno) {
      //     this.vp.token = retorno;
      //     this.vp.token = `Bearer ${this.vp.token}`;
      //     ws_beans_header.headers!['Authorization'] = this.vp.token;
      //     console.log(ws_beans_header);
      //   } else {
      //     this.messageService.clear();
      //     this.messageService.add({
      //       severity: 'error',
      //       summary: 'Erro',
      //       detail: 'Não foi possivel obter o usuário Token',
      //     });
      //   }
      // });
  }

  public ngOnInit(): void {
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

    this.vp.Buscando_WS = false;
    this.activeMenu = fd.showMenus(1, [1, 2, 3, 4]);


  }

  public async pesquisar() {
    let body = {
      codEmp: 1,
      datSug: this.dataSugestao,
      filtros: {}
    }

    let r = await exportaSugestao(JSON.stringify(body));
    this.vp.Buscando_WS = true;

    for(let pro of r.sugestoes) {
      pro.codPro = pro.codPro.replace("'","");
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
     this.vp.Buscando_WS = false;
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
