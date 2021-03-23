import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaRegistroNominaComponent } from './tabla-registro-nomina.component';

describe('TablaRegistroNominaComponent', () => {
  let component: TablaRegistroNominaComponent;
  let fixture: ComponentFixture<TablaRegistroNominaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaRegistroNominaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaRegistroNominaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
