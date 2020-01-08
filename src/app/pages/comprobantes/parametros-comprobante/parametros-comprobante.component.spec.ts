import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrosComprobanteComponent } from './parametros-comprobante.component';

describe('ParametrosComprobanteComponent', () => {
  let component: ParametrosComprobanteComponent;
  let fixture: ComponentFixture<ParametrosComprobanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrosComprobanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrosComprobanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
