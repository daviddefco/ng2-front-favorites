import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router'

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
  }

  ngOnInit() {
    this.getFavorite()
  }

  getFavorite() {
    this._route.params.subscribe((params: Params) => {
      let idFavorite = params['id']
      this._favoriteService.updateFavorite(idFavorite).subscribe(
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

  onSubmit() {
    this._favoriteService.updateFavorite(this.favorite).subscribe(
      response => {
        if(response) {
          this._router.navigate([`/bookmark/${ response }`])
        }
      },
      error => { this._errorHandler.printRequestError(error) }
    )       
  }  
}
