import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComprobanteComponent } from './list-comprobante.component';

describe('ListComprobanteComponent', () => {
  let component: ListComprobanteComponent;
  let fixture: ComponentFixture<ListComprobanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComprobanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComprobanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
