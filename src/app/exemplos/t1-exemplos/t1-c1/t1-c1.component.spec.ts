import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1C1Component } from './t1-c1.component';

describe('T1C1Component', () => {
  let component: T1C1Component;
  let fixture: ComponentFixture<T1C1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1C1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1C1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
