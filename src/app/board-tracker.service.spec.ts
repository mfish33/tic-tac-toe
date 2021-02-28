import { TestBed } from '@angular/core/testing';

import { BoardTrackerService } from './board-tracker.service';

describe('BoardTrackerService', () => {
  let service: BoardTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
