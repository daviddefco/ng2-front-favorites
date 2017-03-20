import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router'

import { FavoriteService } from '../favorite.service'
import { Favorite } from '../favorite'

import { FeedbackDialogComponent } from '../../shared/feedback-dialog/feedback-dialog.component'
import { FeedbackHandlerService } from '../../shared/feedback-dialog/feedback-handler.service'

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css'],
  providers: [ FavoriteService ]
})

export class FavoriteListComponent implements OnInit {
  
  public title: string
  public favorites: [ Favorite ]
  public visible: boolean

  constructor(
    private _favoriteService: FavoriteService,
    private _feedbackHandler: FeedbackHandlerService
  ) { 
    this.title = 'Favorite Bookmark List'
    this.visible = false
  }

  ngOnInit() {
    this._favoriteService.getFavoritos()
      .subscribe(
        result => {
           this.favorites = result.result
           this.visible =  true
        },
        error => {
          this._feedbackHandler.reportError(
            "Error while Retrieving Favorite List",
            `Could not retrieve the favorite list. Error in server call: ${ error }.`
          )          
        }
      )
  }
}