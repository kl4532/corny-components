import { TestBed } from '@angular/core/testing';

import { CornyComponentsService } from './corny-components.service';

describe('CornyComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CornyComponentsService = TestBed.get(CornyComponentsService);
    expect(service).toBeTruthy();
  });
});
