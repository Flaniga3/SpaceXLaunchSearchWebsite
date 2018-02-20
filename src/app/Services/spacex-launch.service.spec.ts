import { TestBed, inject } from '@angular/core/testing';

import { SpacexLaunchService } from './spacex-launch.service';

describe('SpacexLaunchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpacexLaunchService]
    });
  });

  it('should be created', inject([SpacexLaunchService], (service: SpacexLaunchService) => {
    expect(service).toBeTruthy();
  }));
});
