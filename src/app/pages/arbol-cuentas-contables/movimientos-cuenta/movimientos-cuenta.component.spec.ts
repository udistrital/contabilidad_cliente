import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientosCuentaComponent } from './movimientos-cuenta.component';

describe('MovimientosCuentaComponent', () => {
  let component: MovimientosCuentaComponent;
  let fixture: ComponentFixture<MovimientosCuentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimientosCuentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientosCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
