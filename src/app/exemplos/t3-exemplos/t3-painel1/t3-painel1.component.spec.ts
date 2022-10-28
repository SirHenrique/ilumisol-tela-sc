import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T3Painel1Component } from './t3-painel1.component';

describe('T3Painel1Component', () => {
  let component: T3Painel1Component;
  let fixture: ComponentFixture<T3Painel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T3Painel1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T3Painel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
