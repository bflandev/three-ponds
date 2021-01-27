import { TestBed } from '@angular/core/testing';

import { PortalsService } from './portals.service';

describe('PortalsService', () => {
  let service: PortalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
