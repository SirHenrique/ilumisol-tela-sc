import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T3Painel2Component } from './t3-painel2.component';

describe('T3Painel2Component', () => {
  let component: T3Painel2Component;
  let fixture: ComponentFixture<T3Painel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T3Painel2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T3Painel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
