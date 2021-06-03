import { TestBed } from '@angular/core/testing';

import { PatientPostServiceService } from './patient-post-service.service';

describe('PatientPostServiceService', () => {
  let service: PatientPostServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientPostServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
