import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T6AereaComponent } from './t6-aerea.component';

describe('T6AereaComponent', () => {
  let component: T6AereaComponent;
  let fixture: ComponentFixture<T6AereaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T6AereaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T6AereaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
