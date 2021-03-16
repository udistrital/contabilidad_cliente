import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetInformacionComponent } from './set-informacion.component';

describe('SetInformacionComponent', () => {
  let component: SetInformacionComponent;
  let fixture: ComponentFixture<SetInformacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetInformacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
