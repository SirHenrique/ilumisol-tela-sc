import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1ExemplosComponent } from './t1-exemplos.component';

describe('T1ExemplosComponent', () => {
  let component: T1ExemplosComponent;
  let fixture: ComponentFixture<T1ExemplosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1ExemplosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1ExemplosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
