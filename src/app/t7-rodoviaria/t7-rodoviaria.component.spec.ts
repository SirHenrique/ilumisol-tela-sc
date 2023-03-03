import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T7RodoviariaComponent } from './t7-rodoviaria.component';

describe('T7RodoviariaComponent', () => {
  let component: T7RodoviariaComponent;
  let fixture: ComponentFixture<T7RodoviariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T7RodoviariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T7RodoviariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
