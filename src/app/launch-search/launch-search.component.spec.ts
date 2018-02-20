import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchSearchComponent } from './launch-search.component';

describe('LaunchSearchComponent', () => {
  let component: LaunchSearchComponent;
  let fixture: ComponentFixture<LaunchSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
