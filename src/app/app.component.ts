import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';
import { VP_BPM } from 'src/beans/VP_BPM';
import * as fd from 'src/functions/Form_Design';
import * as wc from 'src/functions/Workflow_Cockpit';
import { Data, Info } from 'src/beans/Workflow';
import axios from 'axios';
import { FormValidate } from 'src/functions/Form_Validate';
import { Messages } from 'primeng/messages';

declare var workflowCockpit: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService, FormValidate],
})
export class AppComponent {
  @ViewChild(Messages) msg!: Messages;

  public title = 'SolicitacaoViagem';

  checked: boolean = false;

  public menus: MenuItem[] = fd.Menus;
  public activeMenu: MenuItem = {};
  public panel = fd.Panels;
  public hideButtons: boolean = false;

  public vp: VP_BPM = new VP_BPM();

  constructor(
    private messageService: MessageService,
    public translate: TranslateService,
    public primeNGConfig: PrimeNGConfig,
    private formValidate: FormValidate
  ) {
    new workflowCockpit({
      init: this._loadData,
      onSubmit: this._saveData,
      onError: this._rollback,
    });

    translate.addLangs(['pt']);
    translate.setDefaultLang('pt');
    translate.use('pt');
    this.translate
      .stream('primeng')
      .subscribe((data) => this.primeNGConfig.setTranslation(data));
  }

  public ngOnInit(): void {
    axios.interceptors.request.use(
      (config) => {
        this.vp.buscandoWS = true;
        return config;
      },
      (error) => {
        this.vp.buscandoWS = false;
        return Promise.reject(error);
      }
    );
    axios.interceptors.response.use(
      (response) => {
        this.vp.buscandoWS = false;
        return response;
      },
      (error) => {
        if (error.response.data) {
          const e = error.response.data;
          if (e.errorCode && e.errorCode != 'entity_already_exists')
            this.messageService.add({
              severity: 'error',
              summary: 'Web service error',
              detail: e.errorMessage,
              life: 5000,
            });
          else
            this.messageService.add({
              severity: 'error',
              summary: 'Web service error',
              detail: e.msgRet ?? e.message ?? error.message,
              life: 5000,
            });
        }
        this.vp.buscandoWS = false;
        return Promise.reject(error);
      }
    );
    this.vp.overlay = false;
    this.activeMenu = fd.showMenus(1, [1, 2, 3]);
  }

  private _loadData = async (_data: Data, info: Info) => {
    const r = await wc.loadData(this.vp, info);
    this.vp = r.vp;
  };

  private _saveData = (_data: Data, _info: Info) => {
    this.formValidate.salvarDados(this.vp);
    this.vp.alertas = this.msg.value == null ? [] : this.msg.value;
    if (this.vp.alertas.length > 0)
      throw Error('Os dados informados são inválidos.');
    else return wc.saveData(this.vp);
  };

  private _rollback = wc.rollback;

  a = () => console.dir(this.vp);
}
