import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class SpacexLaunchService {
  // launchBaseUrl = 'https://exampleapi-nwm.azurewebsites.net/api/Launches'
  launchBaseUrl = 'http://localhost:50122/api/Launches';

  constructor(
    private http: HttpClient
  ) { }

  getLaunches() {
    return this.http.get(this.launchBaseUrl)
      .pipe(
        catchError(this.handleError('getLaunches', []))
      );
  }

  getLaunch(id: number) {
    return this.http.get(`${this.launchBaseUrl}/${id}`)
      .pipe(
        catchError(this.handleError('getLaunch', []))
      );
  }

  searchLaunches(query: string) {
    const searchURL = encodeURI(`${this.launchBaseUrl}?query=${query}`);
    return this.http.get(searchURL)
      .pipe(
        catchError(this.handleError('searchLaunches', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
