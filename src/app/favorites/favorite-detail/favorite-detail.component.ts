import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { FavoriteService } from '../favorite.service'
import { Favorite } from '../favorite'
import { ErrorHandlingService } from '../../shared/error-handling.service'

@Component({
  selector: 'app-favorite-detail',
  templateUrl: './favorite-detail.component.html',
  styleUrls: ['./favorite-detail.component.css'],
  providers: [ FavoriteService ]
})

export class FavoriteDetailComponent implements OnInit {

  public favorite: Favorite

  constructor(
    private _favoriteService: FavoriteService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _errorHandler: ErrorHandlingService 
  ) { }

  ngOnInit() {
    this.getFavorite()
  }

  getFavorite() {
    this._route.params.forEach((params: Params) => {
      let idFavorite = params['id']
      this._favoriteService.getFavorito(idFavorite).subscribe(
        response => {
          this.favorite = response.result
          console.log('Favorite: ')
          console.log(this.favorite)
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
}
