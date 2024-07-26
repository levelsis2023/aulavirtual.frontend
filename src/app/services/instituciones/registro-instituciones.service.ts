import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class RegistroInstitucionesService {
    //FIXME: Eliminar cuando se integre con backend

    private baseURL = environment.API_BASE;

    constructor(private http: HttpClient) {}

    guardar(data: any): Observable<any> {
        return this.http.post(`${this.baseURL}aula-virtual/configuracion/instituciones`, data);
    }
    
    listar(): Observable<any[]> {
      return this.http.get<any[]>(`${this.baseURL}aula-virtual/configuracion/instituciones`);
    }

    obtener(id: number): Observable<any> {
      return this.http.get<any>(`${this.baseURL}aula-virtual/configuracion/instituciones/${id}`);
    }

    actualizar(id: number, data: any): Observable<any> {
      return this.http.put<any>(`${this.baseURL}aula-virtual/configuracion/instituciones/${id}`, data);
    }

    delete(id: number): Observable<void> {
      return this.http.delete<void>(`${this.baseURL}aula-virtual/configuracion/instituciones/${id}`);
    }
  
}
