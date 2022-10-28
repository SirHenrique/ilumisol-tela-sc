import { VP_BPM } from 'src/beans/VP_BPM';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-t3-painel3',
  templateUrl: './t3-painel3.component.html',
  styleUrls: ['./t3-painel3.component.scss'],
})
export class T3Painel3Component implements OnInit {
  @Input() vp!: VP_BPM;
  investimento: Investimento[] = [];

  public showModalSub: boolean = false;
  public email: string = '';
  public aprov: boolean = false;
  public avaliacao: string = '';

  constructor() {}

  ngOnInit(): void {}
  public substituidoInput() {
    this.showModalSub = true;
  }

  public substituidoSelect() {
    this.showModalSub = false;
  }

  public checkEmail = (event: any): boolean => {
    const k: string = String.fromCharCode(event.keyCode);
    if (this.email.includes('@') && k === '@') return false;
    else if (/[A-Z0-9a-z@\._-]/.test(k)) return true;
    else {
      event.preventDefault();
      return false;
    }
  };

  public getIndex = (id: number): number =>
    this.investimento.findIndex((x) => x.id == id) + 1;

  public excluirInvestimento = (id: number): Investimento[] =>
    (this.investimento = this.investimento.filter((x) => id !== x.id));

  public adicionarInvestimento = (): void => {
    this.investimento.push({
      id: new Date().getTime(),
      especificacao: '',
      formato: '',
      investimento: 0,
      quantidade: 0,
    });
  };
}

interface Investimento {
  id: number;
  especificacao: string;
  formato: string;
  investimento: number;
  quantidade: number;
}
