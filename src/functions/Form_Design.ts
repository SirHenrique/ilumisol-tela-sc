import { MenuItem } from 'primeng/api';

const Menus: MenuItem[] = [
  {
    label: 'Dados Gerais',
    command: () => showPanel(1),
    visible: false,
  },
  {
    label: 'Dados do Viajante',
    command: () => showPanel(2),
    visible: false,
  },
  {
    label: 'Dados da Viagem',
    command: () => showPanel(3),
    visible: false,
  },
  {
    label: 'Solicitações',
    command: () => showPanel(4),
    visible: false,
  },
  {
    label: 'Cotação de Hotel',
    command: () => showPanel(5),
    visible: false,
  },
  {
    label: 'Cotação de Passagem Aérea',
    command: () => showPanel(6),
    visible: false,
  },
  {
    label: 'Cotação de Passagem Rodoviária',
    command: () => showPanel(7),
    visible: false,
  },
  {
    label: 'Anexos',
    command: () => showPanel(8),
    visible: false,
  },
  {
    label: 'Despesas Gerais',
    command: () => showPanel(9),
    visible: false,
  },
  {
    label: 'Anexos',
    command: () => showPanel(10),
    visible: false,
  },
  {
    label: 'Questionário Sobre Despesas',
    command: () => showPanel(11),
    visible: false,
  },
  {
    label: 'Pesquisa de Satisfação',
    command: () => showPanel(12),
    visible: false,
  },
  {
    label: 'Questionário de Treinamento',
    command: () => showPanel(13),
    visible: false,
  },
];

type panelType = { [k: string]: boolean };
const Panels: panelType = {
  t1_gerais: false,
  t2_viajante: true,
  t3_viagem: true,
  t4_solicitacoes: true,
  t5_hotel: true,
  t6_aerea: true,
  t7_rodoviaria: true,
  t8_informacoes: true,
  t9_despesas: true,
  t10_nota_fiscal: true,
  t11_ques_despesas: true,
  t12_pesquisa: true,
  t13_ques_treinamento: true,
};

function showMenus(inicial: number, panels: number[]): MenuItem {
  for (const i of panels) Menus[i - 1].visible = true;
  return showPanel(inicial);
}

function showPanel(panel: number): MenuItem {
  Object.keys(Panels).forEach((k) => (Panels[k] = true));
  if (panel === 1) Panels['t1_gerais'] = false;
  else if (panel === 2) Panels['t2_viajante'] = false;
  else if (panel === 3) Panels['t3_viagem'] = false;
  else if (panel === 4) Panels['t4_solicitacoes'] = false;
  else if (panel === 5) Panels['t5_hotel'] = false;
  else if (panel === 6) Panels['t6_aerea'] = false;
  else if (panel === 7) Panels['t7_rodoviaria'] = false;
  else if (panel === 8) Panels['t8_informacoes'] = false;
  else if (panel === 9) Panels['t9_despesas'] = false;
  else if (panel === 10) Panels['t10_nota_fiscal'] = false;
  else if (panel === 11) Panels['t11_ques_despesas'] = false;
  else if (panel === 12) Panels['t12_pesquisa'] = false;
  else if (panel === 13) Panels['t13_ques_treinamento'] = false;
  return Menus[panel - 1];
}

export { Panels, Menus, showMenus };
