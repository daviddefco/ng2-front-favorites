import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router'

import { ErrorHandlingService } from '../../shared/error-handling.service'
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

  constructor(
    private _favoriteService: FavoriteService,
    private _errorHandler: ErrorHandlingService 
  ) { 
    this.title = 'Favorite Bookmark List'
  }

  ngOnInit() {
    this._favoriteService.getFavoritos()
      .subscribe(
        result => {
          console.log(result)
          this.favorites = result.result
        },
        error => {
          console.log(error)
          alert('Request could not be completed. See logs')
        }
      )
  }
}