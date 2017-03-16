import { Component, OnInit, Input } from '@angular/core';
import { Feedback } from './feedback'

@Component({
  selector: 'app-feedback-dialog',
  templateUrl: './feedback-dialog.component.html',
  styleUrls: ['./feedback-dialog.component.css']
})
export class FeedbackDialogComponent implements OnInit {

  @Input() feedback: Feedback

  constructor() { 
    this.feedback = null
  }

  ngOnInit() {
  }

  onDismiss() {
    this.feedback = null
  }
}
