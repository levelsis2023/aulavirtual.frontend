import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient,HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

import { tap,map } from 'rxjs/operators';
import { Observable } from 'rxjs';
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
        return this.http.post<ApiResponse>(`${this.baseUrl}login`, data);
    }
    
}