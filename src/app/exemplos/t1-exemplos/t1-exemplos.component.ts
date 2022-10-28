import { VP_BPM } from 'src/beans/VP_BPM';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-t1-exemplos',
  templateUrl: './t1-exemplos.component.html',
  styleUrls: ['./t1-exemplos.component.scss'],
})
export class T1ExemplosComponent implements OnInit {
  @Input() vp!: VP_BPM;
  constructor() {}

  ngOnInit(): void {}
}
