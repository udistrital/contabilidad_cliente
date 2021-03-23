import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetConciliacionBancariaComponent } from './set-conciliacion-bancaria.component';

describe('SetConciliacionBancariaComponent', () => {
  let component: SetConciliacionBancariaComponent;
  let fixture: ComponentFixture<SetConciliacionBancariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetConciliacionBancariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetConciliacionBancariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
