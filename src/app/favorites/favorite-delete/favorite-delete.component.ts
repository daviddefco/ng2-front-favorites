import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { FeedbackHandlerService } from '../../shared/feedback-dialog/feedback-handler.service'
import { FeedbackDialogComponent } from '../../shared/feedback-dialog/feedback-dialog.component'

import { Favorite } from '../favorite'
import { FavoriteService } from '../favorite.service'

@Component({
  selector: 'app-favorite-delete',
  templateUrl: './favorite-delete.component.html',
  styleUrls: ['./favorite-delete.component.css'],
  providers: [ FavoriteService ]
})
export class FavoriteDeleteComponent implements OnInit {

  favorite: Favorite
  visible = false
  constructor(
    private _favoriteService: FavoriteService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _feedbackHandler: FeedbackHandlerService
  ) { }

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
          this._feedbackHandler.reportError(
            "Error in the Edition of a Favorite",
            `Favorite ${ this.favorite.title } could not be edited. Error in server call: ${ error }.`
          )
        }
      )
    })    
  }

  deleteFavorite() {
    this._route.params.subscribe((params: Params) => {
      let idFavorite = params['id']
      this._favoriteService.deleteFavorite(idFavorite).subscribe(
        response => {
          if(response) {
            this._feedbackHandler.reportSuccess (
              "Favorite Deletion Completed",
              `Favorite "${ this.favorite.title}" was succesfully deleted.`
            )
            this.goHome()        
          }
        },
        error => {
          this._feedbackHandler.reportError(
            "Error in the Deletion of a Favorite",
            `Favorite ${ this.favorite.title } could not be created. Error in server call: ${ error }.`
          )
        }
      )
    })    
  }

  goHome() {
    this._router.navigate(['/'])
  }
}
