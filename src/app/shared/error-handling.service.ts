import { Injectable } from '@angular/core';

@Injectable()
export class ErrorHandlingService {

  constructor() { }

  printRequestError(message: string) {
    console.warn(message)
    alert('Request could not be completed. See logs')
  }
}
