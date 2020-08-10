import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudeventsComponent } from './crudevents.component';

describe('CrudeventsComponent', () => {
  let component: CrudeventsComponent;
  let fixture: ComponentFixture<CrudeventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudeventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
