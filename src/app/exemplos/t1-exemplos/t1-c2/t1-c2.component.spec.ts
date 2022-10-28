import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1C2Component } from './t1-c2.component';

describe('T1C2Component', () => {
  let component: T1C2Component;
  let fixture: ComponentFixture<T1C2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1C2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1C2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
