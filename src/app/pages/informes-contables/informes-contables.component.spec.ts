import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesContablesComponent } from './informes-contables.component';

describe('InformesContablesComponent', () => {
  let component: InformesContablesComponent;
  let fixture: ComponentFixture<InformesContablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformesContablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformesContablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
