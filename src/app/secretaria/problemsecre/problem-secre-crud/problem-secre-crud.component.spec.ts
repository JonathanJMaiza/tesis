import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemSecreCrudComponent } from './problem-secre-crud.component';

describe('ProblemSecreCrudComponent', () => {
  let component: ProblemSecreCrudComponent;
  let fixture: ComponentFixture<ProblemSecreCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemSecreCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemSecreCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
