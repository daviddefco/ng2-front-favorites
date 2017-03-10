import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing'

import { AppComponent } from './app.component';
import { FavoriteListComponent } from './favorites/favorite-list/favorite-list.component';

import { AlertModule } from 'ng2-bootstrap/alert';
import { FavoriteDetailComponent } from './favorites/favorite-detail/favorite-detail.component'
import { ErrorHandlingService } from './shared/error-handling.service'

@NgModule({
  declarations: [
    AppComponent,
    FavoriteListComponent,
    FavoriteDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AlertModule.forRoot(),
    routing
  ],
  providers: [ 
    appRoutingProviders,
    ErrorHandlingService
  ],
  bootstrap: [ 
    AppComponent    
  ]
})
export class AppModule { }
