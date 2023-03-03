import { Injectable } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { VP_BPM } from 'src/beans/VP_BPM';
import { environment } from 'src/environments/environment';

const STEP = environment.tarefa();

@Injectable({
  providedIn: 'root',
})
export class FormValidate {
  constructor(private ms: MessageService) {}
  
  public salvarDados = (vp: VP_BPM) => {
    this.ms.clear();

    switch (STEP) {
      default:
        break;
    }
  }
}

const getMsgA = (t: string): Message => ({
  severity: 'warn',
  summary: 'Arquivo obrigatório!',
  detail: t,
});

const getMsgS = (t: string): Message => ({
  severity: 'warn',
  summary: 'Seleção obrigatória!',
  detail: t,
});

const getMsgC = (t: string): Message => ({
  severity: 'warn',
  summary: 'Campo obrigatório!',
  detail: t,
});
