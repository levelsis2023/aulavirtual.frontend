import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient,HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

import {tap, map, catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import { ApiResponse, Base } from '../interface/general';
@Injectable({
    providedIn: 'root',
})
export class LoginService{
    private baseUrl = `${environment.API_BASE}`;
    private urlparametro = `${environment.API_BASE}`;
    constructor(private http: HttpClient) {

    }
    loginUser(data:any): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(`${this.baseUrl}login`, data).pipe(
            catchError(this.handleError)
        );
    }
    private handleError(error: any): Observable<never> {
        // Log the error or send it to a remote logging infrastructure
        console.error('An error occurred:', error);
        // Return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    }

}
