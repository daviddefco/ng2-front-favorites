import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router'

import { FeedbackDialogComponent } from '../../shared/feedback-dialog/feedback-dialog.component'
import { Feedback } from '../../shared/feedback-dialog/feedback'

import { Favorite } from '../favorite'
import { FavoriteService } from '../favorite.service'
import { ErrorHandlingService } from '../../shared/errors/error-handling.service'

@Component({
  selector: 'app-favorite-edit',
  templateUrl: '../favorite-add/favorite-add.component.html',
  styleUrls: ['../favorite-add/favorite-add.component.css'],
  providers: [ FavoriteService ]
})
export class FavoriteEditComponent implements OnInit {

  favorite: Favorite
  feedback: Feedback
  pageTitle: string
  visible: boolean
  
  constructor(
    private _favoriteService: FavoriteService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _errorHandler: ErrorHandlingService
  ) { 
    this.pageTitle = "Edit Favorite" 
    this.visible = false
    this.feedback = null
  }

  ngOnInit() {
    this.getFavorite()
    this.favorite = {
      _id: "",
      title: "",
      url: "",
      description: ""
    }
  }

  getFavorite() {
    this._route.params.subscribe((params: Params) => {
      let idFavorite = params['id']
      this._favoriteService.getFavorite(idFavorite).subscribe(
        response => {
          console.log(response)  
          this.favorite = response
          this.visible = true  
          if( !this.favorite ) {
            this._router.navigate(['/'])
          }
        },
        error => {
          this._errorHandler.printRequestError(error)          
        }
      )
    })    
  }

  onSubmit() {
    this._favoriteService.updateFavorite(this.favorite).subscribe(
      response => {
        if(response) {
          this._router.navigate([`/bookmark/${ response }`])
        }
      },
      error => { 
        this.feedback = {
          title: "Error while Handling the Request",
          message: `Favorite "${ this.favorite.title}" could not be updated. Error in the server: ${ error }`,
          type: "danger"
        } 
      }
    )       
  }  
}
