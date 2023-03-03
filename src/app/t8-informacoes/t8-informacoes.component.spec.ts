import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T8InformacoesComponent } from './t8-informacoes.component';

describe('T8InformacoesComponent', () => {
  let component: T8InformacoesComponent;
  let fixture: ComponentFixture<T8InformacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T8InformacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T8InformacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
