import { TestBed } from '@angular/core/testing';

import { BookCardService } from './book-card.service';

describe('BookCardService', () => {
  let service: BookCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
