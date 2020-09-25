import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSecreAdminComponent } from './group-secre-admin.component';

describe('GroupSecreAdminComponent', () => {
  let component: GroupSecreAdminComponent;
  let fixture: ComponentFixture<GroupSecreAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupSecreAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSecreAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
