import { VP_BPM } from 'src/beans/VP_BPM';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-t1-c1',
  templateUrl: './t1-c1.component.html',
  styleUrls: ['./t1-c1.component.scss'],
})
export class T1C1Component implements OnInit {
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
