import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApiResponse, Base } from '../interface/general';
@Injectable({
    providedIn: 'root',
})

export class CommonService{
    private baseUrl = `${environment.API_BASE}`;    
    private urlparametro = `${environment.API_BASE}`;
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }
    constructor(
        private http: HttpClient,
        private httpClientFormData: HttpClient,
        public handler: HttpBackend,
    ) {
        this.httpClientFormData = new HttpClient(this.handler);
    }
    getCarrerasDropdown():Observable<any>{
        return this.http.get(`${this.baseUrl}carreras-dropdown`);
    }
    getCiclosDropdown():Observable<any>{
        return this.http.get(`${this.baseUrl}ciclos-dropdown`);
    }
    getRolesDropdown():Observable<any>{
        return this.http.get(`${this.baseUrl}roles-dropdown`);
    }
}