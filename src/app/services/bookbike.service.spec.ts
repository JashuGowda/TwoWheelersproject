import { TestBed } from '@angular/core/testing';

import { BookbikeService } from './bookbike.service';

describe('BookbikeService', () => {
  let service: BookbikeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookbikeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
