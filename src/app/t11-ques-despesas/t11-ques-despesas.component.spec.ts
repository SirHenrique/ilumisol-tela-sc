import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T11QuesDespesasComponent } from './t11-ques-despesas.component';

describe('T11QuesDespesasComponent', () => {
  let component: T11QuesDespesasComponent;
  let fixture: ComponentFixture<T11QuesDespesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T11QuesDespesasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T11QuesDespesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
