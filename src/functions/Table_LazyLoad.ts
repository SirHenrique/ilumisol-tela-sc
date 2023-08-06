import { environment } from 'src/environments/environment';

export class JSONQuery {
  public codEmp: number = environment.codEmp;
  public filtros: Filtro[] = [];
  public ordenacao: Ordenacao[] = [];
  public paginacao: Paginacao = { numPag: 1, qtdReg: 10 };

  constructor() { }

  public setPaginacao(numPag: number, qtdReg: number) {
    this.paginacao = { numPag, qtdReg };
    return this;
  }

  public adicionarFiltro(filtro: Filtro[]) {
    this.filtros = filtro
    return this;
  }

  public adicionarOrdenacao(tipo: string, campo: string) {
    this.ordenacao.push({ tipo, campo });
    return this;
  }

  public toString = () => JSON.stringify(this);
}

export interface Filtro {
  filtro?: string;
  campo?: string;
  operador?: string;
  valor?: string;
  ativo?: boolean;
}

export interface Ordenacao {
  ordem?: string;
  campo?: string;
  tipo?: string;
  ativo?: boolean;
}

interface Paginacao {
  numPag: number;
  qtdReg: number;
}
