import { TestBed } from '@angular/core/testing';

import { ListCharIdService } from './list-char-id.service';

describe('ListCharIdService', () => {
  let service: ListCharIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCharIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
