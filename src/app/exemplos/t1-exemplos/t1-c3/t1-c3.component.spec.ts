import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1C3Component } from './t1-c3.component';

describe('T1C3Component', () => {
  let component: T1C3Component;
  let fixture: ComponentFixture<T1C3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1C3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1C3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
