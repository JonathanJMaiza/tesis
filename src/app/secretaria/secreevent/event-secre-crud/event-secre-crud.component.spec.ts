import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSecreCrudComponent } from './event-secre-crud.component';

describe('EventSecreCrudComponent', () => {
  let component: EventSecreCrudComponent;
  let fixture: ComponentFixture<EventSecreCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventSecreCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSecreCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
