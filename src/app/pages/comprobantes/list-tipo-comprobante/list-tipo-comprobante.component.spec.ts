import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTipoComprobanteComponent } from './list-tipo-comprobante.component';

describe('ListTipoComprobanteComponent', () => {
  let component: ListTipoComprobanteComponent;
  let fixture: ComponentFixture<ListTipoComprobanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTipoComprobanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTipoComprobanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
