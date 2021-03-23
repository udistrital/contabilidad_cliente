import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaConciliacionesComponent } from './tabla-conciliaciones.component';

describe('TablaConciliacionesComponent', () => {
  let component: TablaConciliacionesComponent;
  let fixture: ComponentFixture<TablaConciliacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaConciliacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaConciliacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
