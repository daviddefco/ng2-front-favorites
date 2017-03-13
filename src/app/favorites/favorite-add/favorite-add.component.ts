import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { ErrorHandlingService } from '../../shared/error-handling.service'
import { FavoriteService } from '../favorite.service'
import { Favorite } from '../favorite'

@Component({
  selector: 'app-favorite-add',
  templateUrl: './favorite-add.component.html',
  styleUrls: ['./favorite-add.component.css'],
  providers: [ FavoriteService ]
})
export class FavoriteAddComponent implements OnInit {

  favorite: Favorite
  title: string
  constructor(
    private _favoriteService: FavoriteService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _errorHandler: ErrorHandlingService
  ) { this.title = "Add Favorite" }

  ngOnInit() {
    this.favorite =  {
      _id: "",
      title: "",
      url: "",
      description: ""
    }
  }

  onSubmit() {
    console.log('Entra en on submit')
    console.log(this.favorite)
    this._favoriteService.addFavorite(this.favorite).subscribe(
      response => {
        this.favorite = (<any>response).result
        this._router.navigate(['/bookmark' + this.favorite._id])
      },
      error => { this._errorHandler.printRequestError(error) }
    )    
  }

}
