import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDocumentosComponent } from './set-documentos.component';

describe('SetDocumentosComponent', () => {
  let component: SetDocumentosComponent;
  let fixture: ComponentFixture<SetDocumentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetDocumentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
