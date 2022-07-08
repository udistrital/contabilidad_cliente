import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorContableComponent } from './selector-contable.component';

describe('SelectorContableComponent', () => {
  let component: SelectorContableComponent;
  let fixture: ComponentFixture<SelectorContableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorContableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorContableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
