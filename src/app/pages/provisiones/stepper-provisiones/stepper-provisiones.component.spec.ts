import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperProvisionesComponent } from './stepper-provisiones.component';

describe('StepperProvisionesComponent', () => {
  let component: StepperProvisionesComponent;
  let fixture: ComponentFixture<StepperProvisionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperProvisionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperProvisionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
