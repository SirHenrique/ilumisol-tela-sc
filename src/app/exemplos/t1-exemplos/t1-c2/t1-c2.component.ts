import { VP_BPM } from 'src/beans/VP_BPM';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-t1-c2',
  templateUrl: './t1-c2.component.html',
  styleUrls: ['./t1-c2.component.scss'],
})
export class T1C2Component implements OnInit {
  @Input() vp!: VP_BPM;
  cities: City[];

  constructor() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }

  ngOnInit(): void {}
}
interface City {
  name: string;
  code: string;
}
