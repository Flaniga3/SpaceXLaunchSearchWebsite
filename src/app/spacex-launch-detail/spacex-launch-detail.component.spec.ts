import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexLaunchDetailComponent } from './spacex-launch-detail.component';

describe('SpacexLaunchDetailComponent', () => {
  let component: SpacexLaunchDetailComponent;
  let fixture: ComponentFixture<SpacexLaunchDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacexLaunchDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexLaunchDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
