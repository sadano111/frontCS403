import { TestBed } from '@angular/core/testing';

import { LineliffService } from './lineliff.service';

describe('LineliffService', () => {
  let service: LineliffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LineliffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
