import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1GeraisComponent } from './t1-gerais.component';

describe('T1GeraisComponent', () => {
  let component: T1GeraisComponent;
  let fixture: ComponentFixture<T1GeraisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1GeraisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1GeraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
