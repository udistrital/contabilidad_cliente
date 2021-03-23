import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCalculoregimenComponent } from './set-calculoregimen.component';

describe('SetCalculoregimenComponent', () => {
  let component: SetCalculoregimenComponent;
  let fixture: ComponentFixture<SetCalculoregimenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetCalculoregimenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetCalculoregimenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
