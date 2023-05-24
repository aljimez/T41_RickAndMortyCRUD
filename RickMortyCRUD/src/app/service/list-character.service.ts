import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Personajes } from '../models/personajes';

@Injectable({
  providedIn: 'root'
})
export class ListCharacterService {


  API_URL: string = 'http://localhost:3000/characters';


  constructor(private http: HttpClient) {}

  listAllCharacters(): Observable<any> {
    return this.http.get(this.API_URL).pipe(catchError(this.handleError));
  }

  getCharacter(id: any): Observable<any> {
    return this.http
      .get(`${this.API_URL}/${id}`)
      .pipe(catchError(this.handleError));
  }

  createCharacter(data: Personajes): Observable<any> {
    return this.http
      .post(this.API_URL, data)
      .pipe(catchError(this.handleError));
  }

  updateCharacter(id: any, data: any): Observable<any> {
    return this.http
      .put(`${this.API_URL}/${id}`, data)
      .pipe(catchError(this.handleError));
  }

  deleteCharacter(id: any): Observable<any> {
    return this.http
      .delete(`${this.API_URL}/${id}`)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('An error occured');
  }
}
