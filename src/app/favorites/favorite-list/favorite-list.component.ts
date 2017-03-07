import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})

export class FavoriteListComponent implements OnInit {
  public title: string
  constructor() { 
    this.title = 'Favorite Bookmark List'
  }

  ngOnInit() {
  }
}