import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperConciliacionesComponent } from './stepper-conciliaciones.component';

describe('StepperConciliacionesComponent', () => {
  let component: StepperConciliacionesComponent;
  let fixture: ComponentFixture<StepperConciliacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperConciliacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperConciliacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
