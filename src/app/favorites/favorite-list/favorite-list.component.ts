import { Component, OnInit } from '@angular/core'
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
  constructor(private _favoriteService: FavoriteService) { 
    this.title = 'Favorite Bookmark List'
  }

  ngOnInit() {
    this._favoriteService.getFavoritos()
      .subscribe(
        result => {
          console.log(result)
        },
        error => {
          console.log(error)
          alert('Request could not be completed. See logs')
        }
      )
  }
}