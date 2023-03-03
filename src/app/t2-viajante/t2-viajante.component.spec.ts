import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T2ViajanteComponent } from './t2-viajante.component';

describe('T2ViajanteComponent', () => {
  let component: T2ViajanteComponent;
  let fixture: ComponentFixture<T2ViajanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T2ViajanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T2ViajanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
