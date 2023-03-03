import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { PanelModule } from 'primeng/panel';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MenuModule } from 'primeng/menu';
import { T1ExemplosComponent } from './exemplos/t1-exemplos/t1-exemplos.component';
import { T1C1Component } from './exemplos/t1-exemplos/t1-c1/t1-c1.component';
import { T1C2Component } from './exemplos/t1-exemplos/t1-c2/t1-c2.component';
import { T1C3Component } from './exemplos/t1-exemplos/t1-c3/t1-c3.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { T2ExemplosComponent } from './exemplos/t2-exemplos/t2-exemplos.component';
import { T3ExemplosComponent } from './exemplos/t3-exemplos/t3-exemplos.component';
import { AppRoutingModule } from './app-routing.module';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { T3Painel1Component } from './exemplos/t3-exemplos/t3-painel1/t3-painel1.component';
import { T3Painel2Component } from './exemplos/t3-exemplos/t3-painel2/t3-painel2.component';
import { T3Painel3Component } from './exemplos/t3-exemplos/t3-painel3/t3-painel3.component';
import { FileUploadModule } from 'primeng/fileupload';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ExemplosComponent } from './exemplos/exemplos.component';
import { T1GeraisComponent } from './t1-gerais/t1-gerais.component';
import { T2ViajanteComponent } from './t2-viajante/t2-viajante.component';
import { T3ViagemComponent } from './t3-viagem/t3-viagem.component';
import { T4SolicitacoesComponent } from './t4-solicitacoes/t4-solicitacoes.component';
import { T5HotelComponent } from './t5-hotel/t5-hotel.component';
import { T6AereaComponent } from './t6-aerea/t6-aerea.component';
import { T7RodoviariaComponent } from './t7-rodoviaria/t7-rodoviaria.component';
import { T9DespesasComponent } from './t9-despesas/t9-despesas.component';
import { T8InformacoesComponent } from './t8-informacoes/t8-informacoes.component';
import { T10NotaFiscalComponent } from './t10-nota-fiscal/t10-nota-fiscal.component';
import { T11QuesDespesasComponent } from './t11-ques-despesas/t11-ques-despesas.component';
import { T12PesquisaComponent } from './t12-pesquisa/t12-pesquisa.component';
import { T13QuesTreinamentoComponent } from './t13-ques-treinamento/t13-ques-treinamento.component';

export const HttpLoaderFactory = (httpClient: HttpClient) =>
  new TranslateHttpLoader(httpClient, 'assets/i18n/');

@NgModule({
  declarations: [
    AppComponent,
    T1ExemplosComponent,
    T1C1Component,
    T1C2Component,
    T1C3Component,
    T2ExemplosComponent,
    T3ExemplosComponent,
    T3Painel1Component,
    T3Painel2Component,
    T3Painel3Component,
    ExemplosComponent,
    T1GeraisComponent,
    T2ViajanteComponent,
    T3ViagemComponent,
    T4SolicitacoesComponent,
    T5HotelComponent,
    T6AereaComponent,
    T7RodoviariaComponent,
    T9DespesasComponent,
    T8InformacoesComponent,
    T10NotaFiscalComponent,
    T11QuesDespesasComponent,
    T12PesquisaComponent,
    T13QuesTreinamentoComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    InputTextModule,
    CalendarModule,
    MessageModule,
    MessagesModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    DialogModule,
    TableModule,
    CheckboxModule,
    PanelModule,
    InputSwitchModule,
    MenuModule,
    TabMenuModule,
    AppRoutingModule,
    ProgressSpinnerModule,
    FileUploadModule,
    RadioButtonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
