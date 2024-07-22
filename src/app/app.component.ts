import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem, PrimeNGConfig, MessageService } from 'primeng/api';
import { VP_BPM } from 'src/beans/VP_BPM';
import * as fd from 'src/functions/Form_Design';
// import formValidate from 'src/functions/Form_Validate';
import { Validate_Service } from '../services/Validate_Service'
import { Data, Info } from 'src/beans/Workflow';
import axios from 'axios';
import { ThemeService } from '../services/theme.service';
import { AnexoService } from './app.service';
import { Messages } from 'primeng/messages';

declare var workflowCockpit: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService, Validate_Service],
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
  public produtos = [
    {
      codPro: '1010.0170',
      desPro: 'INV. SOFAR TRIFASICO 250K 380V (250KTL-HV-PRO)',
      un: 'UN',
      qtdOC: 0,
      qtdSolNA: 0,
      qtdSol: 0,
      est: 20,
      abr: 50,
      datas:[{
        periodo: 'Atrasados',
        quantidade: 30,
        sugerido: 30
      },
      {
        periodo: 'JAN/2024',
        quantidade: 25,
        sugerido: 25
      },
      {
        periodo: 'FEV/2024',
        quantidade: 15,
        sugerido: 15
      },
      {
        periodo: 'MAR/2024',
        quantidade: 15,
        sugerido: 15
      },
      {
        periodo: 'ABR/2024',
        quantidade: 10,
        sugerido: 10
      },
      {
        periodo: 'MAI/2024',
        quantidade: 5,
        sugerido: 5
      },
      {
        periodo: 'JUN/2024',
        quantidade: 5,
        sugerido: 5
      },
      {
        periodo: 'JUL/2024',
        quantidade: 0,
        sugerido: 0
      },
    ]
    },
    {
      codPro: '1010.0187',
      desPro: 'INV. GOODWE GW250KN-HT',
      un: 'UN',
      qtdOC: 0,
      qtdSolNA: 0,
      qtdSol: 0,
      est: 20,
      abr: 50,
      datas:[{
        periodo: 'Atrasados',
        quantidade: 30,
        sugerido: 30
      },
      {
        periodo: 'JAN/2024',
        quantidade: 25,
        sugerido: 25
      },
      {
        periodo: 'FEV/2024',
        quantidade: 15,
        sugerido: 15
      },
      {
        periodo: 'MAR/2024',
        quantidade: 15,
        sugerido: 15
      },
      {
        periodo: 'ABR/2024',
        quantidade: 10,
        sugerido: 10
      },
      {
        periodo: 'MAI/2024',
        quantidade: 5,
        sugerido: 5
      },
      {
        periodo: 'JUN/2024',
        quantidade: 5,
        sugerido: 5
      },
      {
        periodo: 'JUL/2024',
        quantidade: 0,
        sugerido: 0
      },
    ]
    },
    {
      codPro: '1010.0192',
      desPro: 'INV. SUNGROW SG333HX 12MPPT',
      un: 'UN',
      qtdOC: 0,
      qtdSolNA: 0,
      qtdSol: 0,
      est: 20,
      abr: 50,
      datas:[{
        periodo: 'Atrasados',
        quantidade: 30,
        sugerido: 30
      },
      {
        periodo: 'JAN/2024',
        quantidade: 25,
        sugerido: 25
      },
      {
        periodo: 'FEV/2024',
        quantidade: 15,
        sugerido: 15
      },
      {
        periodo: 'MAR/2024',
        quantidade: 15,
        sugerido: 15
      },
      {
        periodo: 'ABR/2024',
        quantidade: 10,
        sugerido: 10
      },
      {
        periodo: 'MAI/2024',
        quantidade: 5,
        sugerido: 5
      },
      {
        periodo: 'JUN/2024',
        quantidade: 5,
        sugerido: 5
      },
      {
        periodo: 'JUL/2024',
        quantidade: 0,
        sugerido: 0
      },
    ]
    },
    {
      codPro: '1010.0207',
      desPro: 'INV. SUNGROW 250KW 18MPPTS',
      un: 'UN',
      qtdOC: 0,
      qtdSolNA: 0,
      qtdSol: 0,
      est: 20,
      abr: 50,
      datas:[{
        periodo: 'Atrasados',
        quantidade: 30,
        sugerido: 30
      },
      {
        periodo: 'JAN/2024',
        quantidade: 25,
        sugerido: 25
      },
      {
        periodo: 'FEV/2024',
        quantidade: 15,
        sugerido: 15
      },
      {
        periodo: 'MAR/2024',
        quantidade: 15,
        sugerido: 15
      },
      {
        periodo: 'ABR/2024',
        quantidade: 10,
        sugerido: 10
      },
      {
        periodo: 'MAI/2024',
        quantidade: 5,
        sugerido: 5
      },
      {
        periodo: 'JUN/2024',
        quantidade: 5,
        sugerido: 5
      },
      {
        periodo: 'JUL/2024',
        quantidade: 0,
        sugerido: 0
      },
    ]
    },
    {
      codPro: '1010.0245',
      desPro: 'INV. CANADIAN TRIFASICO 250KW 800V (CSI-250K-T800 1A-E)',
      un: 'UN',
      qtdOC: 0,
      qtdSolNA: 0,
      qtdSol: 0,
      est: 20,
      abr: 50,
      datas:[{
        periodo: 'Atrasados',
        quantidade: 30,
        sugerido: 30
      },
      {
        periodo: 'JAN/2024',
        quantidade: 25,
        sugerido: 25
      },
      {
        periodo: 'FEV/2024',
        quantidade: 15,
        sugerido: 15
      },
      {
        periodo: 'MAR/2024',
        quantidade: 15,
        sugerido: 15
      },
      {
        periodo: 'ABR/2024',
        quantidade: 10,
        sugerido: 10
      },
      {
        periodo: 'MAI/2024',
        quantidade: 5,
        sugerido: 5
      },
      {
        periodo: 'JUN/2024',
        quantidade: 5,
        sugerido: 5
      },
      {
        periodo: 'JUL/2024',
        quantidade: 0,
        sugerido: 0
      },
    ]
    },
    {
      codPro: '1011.0073',
      desPro: 'SMART LOGGER GOODWE SCB3000',
      un: 'UN',
      qtdOC: 0,
      qtdSolNA: 0,
      qtdSol: 0,
      est: 20,
      abr: 50,
      datas:[{
        periodo: 'Atrasados',
        quantidade: 30,
        sugerido: 30
      },
      {
        periodo: 'JAN/2024',
        quantidade: 25,
        sugerido: 25
      },
      {
        periodo: 'FEV/2024',
        quantidade: 15,
        sugerido: 15
      },
      {
        periodo: 'MAR/2024',
        quantidade: 15,
        sugerido: 15
      },
      {
        periodo: 'ABR/2024',
        quantidade: 10,
        sugerido: 10
      },
      {
        periodo: 'MAI/2024',
        quantidade: 5,
        sugerido: 5
      },
      {
        periodo: 'JUN/2024',
        quantidade: 5,
        sugerido: 5
      },
      {
        periodo: 'JUL/2024',
        quantidade: 0,
        sugerido: 0
      },
    ]
    },
  ];
  public periodos: any = [];
  public selectedColumns: any = []
 public selectedProducts: any = []
 public alterando = false;
  public vp: VP_BPM = new VP_BPM();

  constructor(
    public translate: TranslateService,
    public primeNGConfig: PrimeNGConfig,
    private themeService: ThemeService,
    private formValidate: Validate_Service,
    private anexoService: AnexoService
  ) {
    translate.addLangs(['pt']);
    translate.setDefaultLang('pt');
    translate.use('pt');
    this.translate
      .stream('primeng')
      .subscribe((data) => this.primeNGConfig.setTranslation(data));
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

    this.produtos[0].datas.forEach(dat => {
     let data = {
        selecionado: false,
        periodo: dat.periodo
      }
       this.periodos.push(data);
    });

    console.log(this.periodos);
  }

  public alterandoQuantidade(produto: any, index: number, quantidade: number, produtoIndex: number) {
    console.log(index)
    console.log(produto.datas.length)
  var alterando
    for(let i = index; i < produto.datas.length; i++) {
      alterando = false;
      if(i == index) {
        this.resto = quantidade - produto.datas[i].sugerido;
      } else {
        if(this.resto !== produto.datas[i].sugerido)
        this.resto = this.resto - produto.datas[i].sugerido;
        else {
        produto.datas[i].quantidade = 0;
        this.resto = 0;
        }
        if(this.resto > 0) {
          produto.datas[i].quantidade = 0;
        }
        if(this.resto < 0) {
          produto.datas[i].quantidade = this.resto * -1;
          this.resto = 0;
        }
      }
    }
    this.produtos[produtoIndex] = produto;
  }
}
