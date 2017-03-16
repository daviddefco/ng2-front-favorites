import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router'

import { ErrorHandlingService } from '../../shared/errors/error-handling.service'
import { FavoriteService } from '../favorite.service'
import { Favorite } from '../favorite'

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
    private _errorHandler: ErrorHandlingService 
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
          this._errorHandler.printRequestError(error)
        }
      )
  }
}