import { TestBed, inject } from '@angular/core/testing';

import { ProfileService } from './profile.service';

describe('ProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileService]
    });
  });

  it('should be created', inject([ProfileService], (service: ProfileService) => {
    expect(service).toBeTruthy();
  }));

  it('should has 100 users', inject([ProfileService], (service: ProfileService) => {
    console.log("HJELLO");
    expect(service.getAllUsers());
  }));
});
