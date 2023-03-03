import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T12PesquisaComponent } from './t12-pesquisa.component';

describe('T12PesquisaComponent', () => {
  let component: T12PesquisaComponent;
  let fixture: ComponentFixture<T12PesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T12PesquisaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T12PesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
