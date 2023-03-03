import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T5HotelComponent } from './t5-hotel.component';

describe('T5HotelComponent', () => {
  let component: T5HotelComponent;
  let fixture: ComponentFixture<T5HotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T5HotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T5HotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
