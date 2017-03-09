import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { FavoriteService } from '../favorite.service'
import { Favorite } from '../favorite'

@Component({
  selector: 'app-favorite-detail',
  templateUrl: './favorite-detail.component.html',
  styleUrls: ['./favorite-detail.component.css'],
  providers: [ FavoriteService ]
})

export class FavoriteDetailComponent implements OnInit {

  constructor(
    private _favoriteService: FavoriteService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getFavorite()
  }

  getFavorite() {
    this._route.params.forEach((params: Params) => {
      let idFavorite = params['id']
      this._favoriteService.getFavorito(idFavorite).subscribe(
        response => {

        },
        error => {
          
        }
      )
    })
  }
}
