import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { FavoriteService } from '../favorite.service'
import { Favorite } from '../favorite'
import { ErrorHandlingService } from '../../shared/errors/error-handling.service'
import { SpinnerComponent } from '../../shared/spinner/spinner.component'

@Component({
  selector: 'app-favorite-detail',
  templateUrl: './favorite-detail.component.html',
  styleUrls: ['./favorite-detail.component.css'],
  providers: [ FavoriteService ]
})

export class FavoriteDetailComponent implements OnInit {

  public favorite: Favorite
  public visible: boolean

  constructor(
    private _favoriteService: FavoriteService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _errorHandler: ErrorHandlingService 
  ) { 
    this.visible = false 
  }

  ngOnInit() {    
    this.getFavorite()
  }

  getFavorite() {
    this._route.params.subscribe((params: Params) => {
      let idFavorite = params['id']
      this._favoriteService.getFavorito(idFavorite).subscribe(
        response => {
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
}
