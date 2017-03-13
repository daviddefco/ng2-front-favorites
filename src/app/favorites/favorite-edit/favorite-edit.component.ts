import { Component, OnInit } from '@angular/core';

import { Favorite } from '../favorite'

@Component({
  selector: 'app-favorite-edit',
  templateUrl: '../favorite-add/favorite-add.component.html',
  styleUrls: ['../favorite-add/favorite-add.component.css']
})
export class FavoriteEditComponent implements OnInit {

  favorite: Favorite
  title: string
  
  constructor() { 
    this.title = "Edit Favorite"
  }

  ngOnInit() {
  }

}
