import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class EventService{ 

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

    getEventsAlumno(data:any):Observable<any>{
        return this.http.post(`${this.baseUrl}calendario/alumno`,data);
    }
    getEventsDocente(data:any):Observable<any>{
        return this.http.post(`${this.baseUrl}calendario/docente`,data);
    }
    
}
