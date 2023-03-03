import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T9DespesasComponent } from './t9-despesas.component';

describe('T9DespesasComponent', () => {
  let component: T9DespesasComponent;
  let fixture: ComponentFixture<T9DespesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T9DespesasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T9DespesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
