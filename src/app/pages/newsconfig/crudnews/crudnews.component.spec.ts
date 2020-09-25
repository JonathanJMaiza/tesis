import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudnewsComponent } from './crudnews.component';

describe('CrudnewsComponent', () => {
  let component: CrudnewsComponent;
  let fixture: ComponentFixture<CrudnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
