import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesagregacionComponent } from './desagregacion.component';

describe('DesagregacionComponent', () => {
  let component: DesagregacionComponent;
  let fixture: ComponentFixture<DesagregacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesagregacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesagregacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
