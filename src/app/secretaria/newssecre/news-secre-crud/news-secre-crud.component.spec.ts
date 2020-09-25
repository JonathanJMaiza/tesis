import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSecreCrudComponent } from './news-secre-crud.component';

describe('NewsSecreCrudComponent', () => {
  let component: NewsSecreCrudComponent;
  let fixture: ComponentFixture<NewsSecreCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsSecreCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSecreCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
