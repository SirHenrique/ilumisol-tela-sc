import { Message } from 'primeng/api';
import { VP_BPM } from 'src/beans/VP_BPM';
import { environment } from 'src/environments/environment';

const STEP = environment.tarefa();

export default function formValidate(vp: VP_BPM): Message[] {
  var messages: Message[] = [];

  switch (STEP) {
    default:
      break;
  }

  return messages;
}
