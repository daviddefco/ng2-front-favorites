import { Component, OnInit, ViewChild, AfterViewInit  } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { FavoriteService } from '../favorite.service'
import { Favorite } from '../favorite'
import { SpinnerComponent } from '../../shared/spinner/spinner.component'

import { FeedbackHandlerService } from '../../shared/feedback-dialog/feedback-handler.service'
import { FeedbackDialogComponent } from '../../shared/feedback-dialog/feedback-dialog.component'

@Component({
  selector: 'app-favorite-detail',
  templateUrl: './favorite-detail.component.html',
  styleUrls: ['./favorite-detail.component.css'],
  providers: [ FavoriteService ]
})

export class FavoriteDetailComponent implements OnInit, AfterViewInit  {

  favorite: Favorite
  visible: boolean
  @ViewChild(FeedbackDialogComponent) feedbackChild: FeedbackDialogComponent

  constructor(
    private _favoriteService: FavoriteService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _feedbackHandler: FeedbackHandlerService
  ) { 
    this.visible = false
    // this._feedbackHandler.dismissFeedback()
  }

  ngOnInit() {    
    this.getFavorite()
  }

  ngAfterViewInit() {
    this._feedbackHandler.hasBeenShown = true
  }

  getFavorite() {
    this._route.params.subscribe((params: Params) => {
      let idFavorite = params['id']
      this._favoriteService.getFavorite(idFavorite).subscribe(
        response => {
          this.favorite = response
          this.visible = true    
          if( !this.favorite ) {
            this._router.navigate(['/'])
          }
        },
        error => {
          this._feedbackHandler.reportError(
            `Error while Retrieving Favorite ${ this.favorite.title }`,
            `Could not retrieve the favorite ${ this.favorite.title }. Error in server call: ${ error }.`
          )          
        }
      )
    })
  }
}
