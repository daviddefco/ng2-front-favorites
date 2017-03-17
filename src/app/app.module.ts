import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing'

import { AppComponent } from './app.component';
import { FavoriteListComponent } from './favorites/favorite-list/favorite-list.component';

import { AlertModule } from 'ng2-bootstrap/alert';
import { FavoriteDetailComponent } from './favorites/favorite-detail/favorite-detail.component'
import { ErrorHandlingService } from './shared/errors/error-handling.service';
import { FeedbackHandlerService } from './shared/feedback-dialog/feedback-handler.service';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { FavoriteAddComponent } from './favorites/favorite-add/favorite-add.component';
import { FavoriteEditComponent } from './favorites/favorite-edit/favorite-edit.component';
import { FavoriteDeleteComponent } from './favorites/favorite-delete/favorite-delete.component';
import { FeedbackDialogComponent } from './shared/feedback-dialog/feedback-dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    FavoriteListComponent,
    FavoriteDetailComponent,
    SpinnerComponent,
    FavoriteAddComponent,
    FavoriteEditComponent,
    FavoriteDeleteComponent,
    FeedbackDialogComponent
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
    ErrorHandlingService,
    FeedbackHandlerService
  ],
  bootstrap: [ 
    AppComponent    
  ]
})
export class AppModule { }
