import { TestBed, inject } from '@angular/core/testing';

import { SimpleDataService } from './simple-data.service';

describe('SimpleDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimpleDataService]
    });
  });

  it('should be created', inject([SimpleDataService], (service: SimpleDataService) => {
    expect(service).toBeTruthy();
  }));
});
