import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetComparacionComponent } from './set-comparacion.component';

describe('SetComparacionComponent', () => {
  let component: SetComparacionComponent;
  let fixture: ComponentFixture<SetComparacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetComparacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetComparacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
