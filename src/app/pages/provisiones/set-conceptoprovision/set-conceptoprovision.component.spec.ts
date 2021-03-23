import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetConceptoprovisionComponent } from './set-conceptoprovision.component';

describe('SetConceptoprovisionComponent', () => {
  let component: SetConceptoprovisionComponent;
  let fixture: ComponentFixture<SetConceptoprovisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetConceptoprovisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetConceptoprovisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
