import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T3ViagemComponent } from './t3-viagem.component';

describe('T3ViagemComponent', () => {
  let component: T3ViagemComponent;
  let fixture: ComponentFixture<T3ViagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T3ViagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T3ViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
