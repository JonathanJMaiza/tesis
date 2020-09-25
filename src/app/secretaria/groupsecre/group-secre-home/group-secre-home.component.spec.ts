import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSecreHomeComponent } from './group-secre-home.component';

describe('GroupSecreHomeComponent', () => {
  let component: GroupSecreHomeComponent;
  let fixture: ComponentFixture<GroupSecreHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupSecreHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSecreHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
