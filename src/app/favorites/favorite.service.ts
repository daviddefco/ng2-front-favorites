import { Injectable } from '@angular/core'
import { Http, Response, Headers } from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/delay'
import { Observable } from 'rxjs/Observable'

import { Favorite } from './favorite'

@Injectable()
export class FavoriteService {

  public urlRestfulApi: string

  constructor(private _http: Http) { 
    this.urlRestfulApi = 'http://localhost:3000/favorite'
  }

  /**
   * Return the favorite list with a small delay to simulate a long
   * processing operation
   */
  getFavoritos() {
    return this._http.get(this.urlRestfulApi)
      .map(res => res.json()).delay(1500)
  }

  /**
   * Return a favorite with a samll delay to simulate a long processing
   * operation
   * @param id ID of the favorite being searched
   */
  getFavorite(id:string) {
    return this._http.get(this.urlRestfulApi + '/' + id)
      .map(res => res.json().result).delay(1000) 
  }

  /**
   * Returns an observable that delivers the favorite added to the DB
   * with its id param filled
   * @param favorite favorite to be added to the DB
   */
  addFavorite(favorite: Favorite) {
    // POST requests have to attach JSON sring
    let json = JSON.stringify(favorite)
    return this._http.post(
      this.urlRestfulApi, json, { headers: this.headers() }
    ).map(response => response.json().result)
  }

  /**
   * Returns an observable that delivers the ID of the updated favorite
   * @param favorite Favorite to be updated
   */
  updateFavorite(favorite: Favorite) {
    let json = JSON.stringify(favorite)
    return this._http.put(
      this.urlRestfulApi, json, { headers: this.headers() }
    ).map(response => response.json().result._id)    
  }

  private headers(): Headers {
    let headers: Headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return headers
  }
}
