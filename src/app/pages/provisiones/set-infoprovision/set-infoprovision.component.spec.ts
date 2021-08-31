import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetInfoprovisionComponent } from './set-infoprovision.component';

describe('SetInfoprovisionComponent', () => {
  let component: SetInfoprovisionComponent;
  let fixture: ComponentFixture<SetInfoprovisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetInfoprovisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetInfoprovisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
