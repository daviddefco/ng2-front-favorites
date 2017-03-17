import { Injectable } from '@angular/core'
import { Feedback } from './feedback'

@Injectable()
export class FeedbackHandlerService {

  feedback: Feedback
  hasBeenShown: boolean

  constructor() { 
    this.feedback = null
    this.hasBeenShown = false
  }

  hasAvailableFeedback() {
    return this.feedback != null
  }

  reportSuccess(title: string, message: string) {
    this.feedback = {
      title: title,
      message: message,
      type: "success"
    }
  }

  reportError(title: string, message: string) {
    this.feedback = {
      title: title,
      message: message,
      type: "danger"
    }
  }

  reportInfo(title: string, message: string) {
    this.feedback = {
      title: title,
      message: message,
      type: "info"
    }
  }

  reportPrimary(title: string, message: string) {
    this.feedback = {
      title: title,
      message: message,
      type: "primary"
    }
  }

  reportWarning(title: string, message: string) {
    this.feedback = {
      title: title,
      message: message,
      type: "warning"
    }
  }

  dismissFeedback() {
    this.feedback = null
    this.hasBeenShown = false
  }
}
