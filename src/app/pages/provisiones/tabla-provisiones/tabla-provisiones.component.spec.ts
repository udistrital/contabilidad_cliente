import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaProvisionesComponent } from './tabla-provisiones.component';

describe('TablaProvisionesComponent', () => {
  let component: TablaProvisionesComponent;
  let fixture: ComponentFixture<TablaProvisionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaProvisionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaProvisionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
