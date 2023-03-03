import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T4SolicitacoesComponent } from './t4-solicitacoes.component';

describe('T4SolicitacoesComponent', () => {
  let component: T4SolicitacoesComponent;
  let fixture: ComponentFixture<T4SolicitacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T4SolicitacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T4SolicitacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
