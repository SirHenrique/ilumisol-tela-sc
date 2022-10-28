import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T3Painel3Component } from './t3-painel3.component';

describe('T3Painel3Component', () => {
  let component: T3Painel3Component;
  let fixture: ComponentFixture<T3Painel3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T3Painel3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T3Painel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
