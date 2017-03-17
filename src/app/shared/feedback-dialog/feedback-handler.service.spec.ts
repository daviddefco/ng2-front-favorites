import { TestBed, inject } from '@angular/core/testing';

import { FeedbackHandlerService } from './feedback-handler.service';

describe('FeedbackHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeedbackHandlerService]
    });
  });

  it('should ...', inject([FeedbackHandlerService], (service: FeedbackHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
