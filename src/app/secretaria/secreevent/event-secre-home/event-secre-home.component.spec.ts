import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSecreHomeComponent } from './event-secre-home.component';

describe('EventSecreHomeComponent', () => {
  let component: EventSecreHomeComponent;
  let fixture: ComponentFixture<EventSecreHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventSecreHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSecreHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
