import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T3ExemplosComponent } from './t3-exemplos.component';

describe('T3ExemplosComponent', () => {
  let component: T3ExemplosComponent;
  let fixture: ComponentFixture<T3ExemplosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T3ExemplosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T3ExemplosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
