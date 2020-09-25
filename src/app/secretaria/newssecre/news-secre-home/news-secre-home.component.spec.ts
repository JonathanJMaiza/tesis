import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSecreHomeComponent } from './news-secre-home.component';

describe('NewsSecreHomeComponent', () => {
  let component: NewsSecreHomeComponent;
  let fixture: ComponentFixture<NewsSecreHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsSecreHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSecreHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
