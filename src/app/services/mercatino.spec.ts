import { TestBed } from '@angular/core/testing';

import { Mercatino } from './mercatino';

describe('Mercatino', () => {
  let service: Mercatino;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mercatino);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
