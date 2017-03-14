import { Injectable } from '@angular/core'
import { Http, Response, Headers } from '@angular/http'
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable'
import { Favorite } from './favorite'

@Injectable()
export class FavoriteService {

  public urlRestfulApi: string

  constructor(private _http: Http) { 
    this.urlRestfulApi = 'http://localhost:3000/favorite'
  }

  getFavoritos() {
    return this._http.get(this.urlRestfulApi)
      .map(res => res.json())
  }

  getFavorito(id:string) {
    return this._http.get(this.urlRestfulApi + '/' + id)
      .map(res => res.json()) 
  }

  addFavorite(favorite: Favorite) {
    // POST requests have to attach JSON sring
    let json = JSON.stringify(favorite)
    let headers: Headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this._http.post(this.urlRestfulApi, json, { headers: headers })
      .map(response => {
        let favorite: Favorite
        favorite = response.json().result
        return favorite
      })
  }
}
