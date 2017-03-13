import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { FavoriteService } from '../favorite.service'
import { Favorite } from '../favorite'
import { ErrorHandlingService } from '../../shared/error-handling.service'
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
  ) { this.visible = false }

  ngOnInit() {
    this.getFavorite()
  }

  getFavorite() {
    this._route.params.forEach((params: Params) => {
      let idFavorite = params['id']
      this._favoriteService.getFavorito(idFavorite).subscribe(
        response => {
          // simulation of a slow interaction to show slider
          setTimeout(() => {
            this.favorite = response.result
            console.log('Favorite: ')
            console.log(this.favorite)
            this.visible = true    
            if( !this.favorite ) {
              this._router.navigate(['/'])
            }
          }, 1000)
        },
        error => {
          this._errorHandler.printRequestError(error)          
        }
      )
    })
  }
}
