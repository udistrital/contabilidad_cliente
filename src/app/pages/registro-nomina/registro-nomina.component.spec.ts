import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroNominaComponent } from './registro-nomina.component';

describe('RegistroNominaComponent', () => {
  let component: RegistroNominaComponent;
  let fixture: ComponentFixture<RegistroNominaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroNominaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroNominaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
