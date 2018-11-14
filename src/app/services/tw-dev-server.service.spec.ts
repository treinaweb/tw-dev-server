import { TestBed } from '@angular/core/testing';

import { TwDevServerService } from './tw-dev-server.service';

describe('TwDevServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TwDevServerService = TestBed.get(TwDevServerService);
    expect(service).toBeTruthy();
  });
});
