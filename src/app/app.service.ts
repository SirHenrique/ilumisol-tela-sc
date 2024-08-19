import { Injectable } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';
import { environment } from 'src/environments/environment';
import * as wsb from 'src/beans/WS_Beans';
import { ResponseLoadData } from 'src/beans/VP_BPM';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { user } from '@seniorsistemas/senior-platform-data';

const STEP = environment.tarefa();

@Injectable({
  providedIn: 'root'
})

export class AppService {
  private capturaAcao = new Subject<string>();
  acao$ = this.capturaAcao.asObservable();
  private token : any;
  usuario: any;
  constructor(private http: HttpClient) {
    user
    .getToken()
    .then((retorno) => {
      this.token = retorno;
      console.log('teste')
      const user = this.token.username.split('@');
      this.usuario = user[0];
      this.capturaAcao.next(this.token.access_token);

    })
    .catch((error) => {
      alert(
        'Não foi possível obter token. Verifique se a tela está sendo acessada pela plataforma Senior X.'
      );
    });
  }

  getUser(): Observable<any> {
    if (this.token) {
      return of(this.token);
    } else {
      throw new Error('Erro ao obter o token do usuário logado.');
    }
  }
}


