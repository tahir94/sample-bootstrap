import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlexaEditComponent } from './alexa-edit.component';

describe('AlexaEditComponent', () => {
  let component: AlexaEditComponent;
  let fixture: ComponentFixture<AlexaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlexaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlexaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
