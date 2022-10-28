import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T2ExemplosComponent } from './t2-exemplos.component';

describe('T2ExemplosComponent', () => {
  let component: T2ExemplosComponent;
  let fixture: ComponentFixture<T2ExemplosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T2ExemplosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T2ExemplosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
