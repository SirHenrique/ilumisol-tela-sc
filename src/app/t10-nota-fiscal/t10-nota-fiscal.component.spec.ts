import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T10NotaFiscalComponent } from './t10-nota-fiscal.component';

describe('T10NotaFiscalComponent', () => {
  let component: T10NotaFiscalComponent;
  let fixture: ComponentFixture<T10NotaFiscalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T10NotaFiscalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T10NotaFiscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
