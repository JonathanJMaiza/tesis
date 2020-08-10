import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudgroupsComponent } from './crudgroups.component';

describe('CrudgroupsComponent', () => {
  let component: CrudgroupsComponent;
  let fixture: ComponentFixture<CrudgroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudgroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudgroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
