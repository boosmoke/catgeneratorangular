import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatGenComponent } from './catGen.component';

describe('CatGenComponent', () => {
  let component: CatGenComponent;
  let fixture: ComponentFixture<CatGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
