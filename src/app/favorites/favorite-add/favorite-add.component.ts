import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { FavoriteService } from '../favorite.service'
import { Favorite } from '../favorite'

import { FeedbackDialogComponent } from '../../shared/feedback-dialog/feedback-dialog.component'
import { FeedbackHandlerService } from '../../shared/feedback-dialog/feedback-handler.service'

@Component({
  selector: 'app-favorite-add',
  templateUrl: './favorite-add.component.html',
  styleUrls: ['./favorite-add.component.css'],
  providers: [ FavoriteService ]
})

export class FavoriteAddComponent implements OnInit {

  public favorite: Favorite
  public pageTitle: string

  constructor(
    private _favoriteService: FavoriteService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _feedbackHandler: FeedbackHandlerService
  ) { 
    this.pageTitle = "Add Favorite" 
    // this._feedbackHandler.dismissFeedback()
  }

  ngOnInit() {
    this.favorite =  {
      _id: "",
      title: "",
      url: "",
      description: ""
    }
  }

  onSubmit() {
    this._favoriteService.addFavorite(this.favorite).subscribe(
      response => {
        if(response) {
          this.favorite = response
          this._router.navigate([`/bookmark/${ this.favorite._id }`])
          this._feedbackHandler.reportSuccess(
            "Successful Creation of a Favorite",
            `Favorite ${ this.favorite.title } was succesfully created.`
          )          
        }
      },
      error => { 
        this._feedbackHandler.reportError(
          "Error in the Creation of a Favorite",
          `Favorite ${ this.favorite.title } could not be created. Error in server call: ${ error }.`
        )
      }
    )    
  }

}
