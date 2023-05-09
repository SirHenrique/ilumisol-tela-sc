import { Injectable } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { VP_BPM } from 'src/beans/VP_BPM';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Validate_Service {
  private readonly STEP = environment.tarefa();
  private messages: Message[] = [];
  constructor(private ms: MessageService){}

  public validate(vp: VP_BPM) {
    switch (this.STEP) {
      // case environment.s1_etapa1:
      //   if(vp.msgTeste == ''){
      //     this.ms.add({
      //       severity: 'warn',
      //       summary: 'Message working!',
      //       detail: 'testeMsg',
      //     });
      //   }
      //   break;
      default:
        break;
    }
  }
}
