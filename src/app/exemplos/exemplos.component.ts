import { MenuItem } from 'primeng/api';
import { VP_BPM } from 'src/beans/VP_BPM';
import { Component, Input, OnInit } from '@angular/core';
import * as fd from 'src/functions/Form_Design';

@Component({
  selector: 'app-exemplos',
  templateUrl: './exemplos.component.html',
  styleUrls: ['./exemplos.component.scss'],
})
export class ExemplosComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public menus: MenuItem[] = fd.Menus;
  public activeMenu: MenuItem = {};
  public panel = fd.Panels;
  public hideButtons: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
