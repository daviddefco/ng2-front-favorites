import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FavoriteListComponent } from './favorites/favorite-list/favorite-list.component';

import { AlertModule } from 'ng2-bootstrap/alert'

@NgModule({
  declarations: [
    AppComponent,
    FavoriteListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [ AppComponent, FavoriteListComponent ]
})
export class AppModule { }
