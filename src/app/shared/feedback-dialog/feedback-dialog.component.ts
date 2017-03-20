import { Component, OnInit, OnDestroy, AfterContentInit,  Input } 
from '@angular/core';
import { Feedback } from './feedback'
import { FeedbackHandlerService } from './feedback-handler.service'

@Component({
  selector: 'app-feedback-dialog',
  templateUrl: './feedback-dialog.component.html',
  styleUrls: ['./feedback-dialog.component.css']
})

export class FeedbackDialogComponent implements OnInit, OnDestroy {

  constructor(private _feedbackHandler: FeedbackHandlerService) { 
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this._feedbackHandler.hasBeenShown) {
      this._feedbackHandler.dismissFeedback()
      this._feedbackHandler.hasBeenShown = false
    }  
  }

  ngAfterViewInit() {
    if (this._feedbackHandler.hasAvailableFeedback()) {
      this._feedbackHandler.hasBeenShown = true
    }  
  }

  onDismiss() {
    this._feedbackHandler.dismissFeedback()
  }
}
