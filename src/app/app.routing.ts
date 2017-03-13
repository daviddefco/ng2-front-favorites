import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { FavoriteListComponent } from './favorites/favorite-list/favorite-list.component'
import { FavoriteDetailComponent } from './favorites/favorite-detail/favorite-detail.component'
import { FavoriteAddComponent } from './favorites/favorite-add/favorite-add.component'

const appRoutes: Routes = [
    { path: '', component: FavoriteListComponent },
    { path: 'bookmark/:id', component: FavoriteDetailComponent },
    { path: 'favorite-add', component: FavoriteAddComponent },
    { path: '**', component: FavoriteListComponent }
]

export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)