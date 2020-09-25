import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemSecreHomeComponent } from './problem-secre-home.component';

describe('ProblemSecreHomeComponent', () => {
  let component: ProblemSecreHomeComponent;
  let fixture: ComponentFixture<ProblemSecreHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemSecreHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemSecreHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
