import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { FavoriteListComponent } from './favorites/favorite-list/favorite-list.component'
import { FavoriteDetailComponent } from './favorites/favorite-detail/favorite-detail.component'

const appRoutes: Routes = [
    { path: '', component: FavoriteListComponent },
    { path: 'bookmark/:id', component: FavoriteDetailComponent },
    { path: '**', component: FavoriteListComponent }
]

export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)