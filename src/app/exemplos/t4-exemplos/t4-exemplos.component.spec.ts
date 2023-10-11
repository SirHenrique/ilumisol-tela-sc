/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { T4ExemplosComponent } from './t4-exemplos.component';

describe('T4ExemplosComponent', () => {
  let component: T4ExemplosComponent;
  let fixture: ComponentFixture<T4ExemplosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T4ExemplosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T4ExemplosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
