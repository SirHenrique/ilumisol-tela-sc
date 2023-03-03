import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T13QuesTreinamentoComponent } from './t13-ques-treinamento.component';

describe('T13QuesTreinamentoComponent', () => {
  let component: T13QuesTreinamentoComponent;
  let fixture: ComponentFixture<T13QuesTreinamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T13QuesTreinamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T13QuesTreinamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
