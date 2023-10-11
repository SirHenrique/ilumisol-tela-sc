import { MenuItem } from 'primeng/api';

const Menus: MenuItem[] = [
  {
    label: 'Tab c/ colunas',
    command: () => showPanel(1),
    visible: false,
  },
  {
    label: 'Tab de anexos e paginação',
    command: () => showPanel(2),
    visible: false,
  },
  {
    label: 'Tab c/ painéis',
    command: () => showPanel(3),
    visible: false,
  },
  {
    label: 'Tab de anexos s/ GED',
    command: () => showPanel(4),
    visible: false,
  },
];

type panelType = { [k: string]: boolean };
const Panels: panelType = {
  t1_exemplos: false,
  t2_exemplos: true,
  t3_exemplos: true,
  t4_exemplos: true,
};

function showMenus(inicial: number, panels: number[]): MenuItem {
  for (const i of panels) Menus[i - 1].visible = true;
  return showPanel(inicial);
}

function showPanel(panel: number): MenuItem {
  Object.keys(Panels).forEach((k) => (Panels[k] = true));
  if (panel === 1) Panels['t1_exemplos'] = false;
  if (panel === 2) Panels['t2_exemplos'] = false;
  if (panel === 3) Panels['t3_exemplos'] = false;
  if (panel === 4) Panels['t4_exemplos'] = false;
  return Menus[panel - 1];
}

export { Panels, Menus, showMenus };
