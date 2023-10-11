import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
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
import { T4ExemplosComponent } from './exemplos/t4-exemplos/t4-exemplos.component';
import { AppRoutingModule } from './app-routing.module';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { T3Painel1Component } from './exemplos/t3-exemplos/t3-painel1/t3-painel1.component';
import { T3Painel2Component } from './exemplos/t3-exemplos/t3-painel2/t3-painel2.component';
import { T3Painel3Component } from './exemplos/t3-exemplos/t3-painel3/t3-painel3.component';
import { FileUploadModule } from 'primeng/fileupload';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ExemplosComponent } from './exemplos/exemplos.component';
import { AnexoService, PastaService } from './app.service';
import { Validate_Service } from 'src/services/Validate_Service';

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
    T4ExemplosComponent,
    T3Painel1Component,
    T3Painel2Component,
    T3Painel3Component,
    ExemplosComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
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
  providers: [PastaService, Validate_Service, AnexoService],
  bootstrap: [AppComponent],
})
export class AppModule { }
