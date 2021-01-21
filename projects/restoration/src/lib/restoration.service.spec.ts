import { TestBed } from '@angular/core/testing';

import { RestorationService } from './restoration.service';

describe('RestorationService', () => {
  let service: RestorationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestorationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
