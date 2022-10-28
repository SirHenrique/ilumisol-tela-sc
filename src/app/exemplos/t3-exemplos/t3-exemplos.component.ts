import { VP_BPM } from 'src/beans/VP_BPM';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-t3-exemplos',
  templateUrl: './t3-exemplos.component.html',
  styleUrls: ['./t3-exemplos.component.scss'],
})
export class T3ExemplosComponent implements OnInit {
  @Input() vp!: VP_BPM;

  constructor() {}

  ngOnInit(): void {}
}
