import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

import { Observable } from 'rxjs';
import { ApiResponse } from '../interface/general';
import {HttpClient} from "@angular/common/http";
@Injectable({
    providedIn: 'root',
})
export class UsuarioService{
    private baseUrl = `${environment.API_BASE}`;
    //private urlparametro = `${environment.API_BASE}`;
    constructor(private http: HttpClient) {

    }
    getUsuarios(domain_id:any): Observable<ApiResponse> {
        if (domain_id === null) {
            return this.http.get<ApiResponse>(`${this.baseUrl}usuarios/0`);
        }
        return this.http.get<ApiResponse>(`${this.baseUrl}usuarios/${domain_id}`);
    }
    getUsuario(idUsuario: any): Observable<ApiResponse> {
        console.log(idUsuario);
        return this.http.get<ApiResponse>(`${this.baseUrl}usuario/${idUsuario}`);
    }
    saveUsuario(data: any): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(`${this.baseUrl}usuarios`, data);
    }
    deleteUsuario(id:number){
        return this.http.delete(`${this.baseUrl}usuarios/${id}`);
      }
}
