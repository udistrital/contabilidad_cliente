import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetResumenprovisionComponent } from './set-resumenprovision.component';

describe('SetResumenprovisionComponent', () => {
  let component: SetResumenprovisionComponent;
  let fixture: ComponentFixture<SetResumenprovisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetResumenprovisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetResumenprovisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
