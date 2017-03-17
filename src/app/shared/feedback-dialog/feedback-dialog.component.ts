import { Component, OnInit, OnDestroy, Input } from '@angular/core';
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
    console.log(this._feedbackHandler.feedback)
  }

  ngOnDestroy() {
    if (this._feedbackHandler.hasBeenShown) {
      this._feedbackHandler.dismissFeedback()
    }  
  }

  onDismiss() {
    this._feedbackHandler.dismissFeedback()
  }
}
