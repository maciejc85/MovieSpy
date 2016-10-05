import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class SearchService {

  constructor(private http: Http) { }

  private searchUrl = 'app/api/movie.json' //'http://www.omdbapi.com/';
  public searchHistory = [];

  searchMovies(searchQuery: string): Observable<any> {
    //return new Observable<any>();
    return this.http.get(this.searchUrl + '?t=' + searchQuery)
      .map(this.extractData);
  }

  getMovies(searchQuery: string): Observable<any> {
    return this.http.get('app/api/movies.json').map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }


  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

