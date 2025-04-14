import { TestBed } from '@angular/core/testing';

import { NewBookCardService } from './new-book-card.service';

describe('NewBookCardService', () => {
  let service: NewBookCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewBookCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
