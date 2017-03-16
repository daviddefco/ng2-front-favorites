import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { ErrorHandlingService } from '../../shared/errors/error-handling.service'
import { FavoriteService } from '../favorite.service'
import { Favorite } from '../favorite'

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
    private _errorHandler: ErrorHandlingService
  ) { this.pageTitle = "Add Favorite" }

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
        }
      },
      error => { this._errorHandler.printRequestError(error) }
    )    
  }

}
