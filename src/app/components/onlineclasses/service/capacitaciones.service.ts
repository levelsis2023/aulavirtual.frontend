import {Injectable} from '@angular/core';
import {HttpBackend, HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from 'src/environments/environment.development';

import {map, retry, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ApiResponse, Base, Capacitaciones, DocumentoGestion} from '../interface/general';

@Injectable({
    providedIn: 'root',
})
export class CapacitacionesService {

    private baseUrl = `${environment.API_BASE}`;
    private urlparametro = `${environment.API_BASE}`;

    constructor(
        private http: HttpClient,
        private httpClientFormData: HttpClient,
        public handler: HttpBackend,
    ) {
        this.httpClientFormData = new HttpClient(this.handler);
    }

    getCode() {
        return this.http
            .get<string>(`${this.urlparametro}capacitaciones-codigo`)
            .pipe(
                map((response: any) => {
                        return response;
                })
            );
    }


    listarCapacitaciones() {
        return this.http
            .get<Base>(`${this.baseUrl}capacitaciones`)
            .pipe(
                map((response: Base) => {
                    if (response.responseCode === 0) {
                        return response.response;
                    } else {
                        throw new Error(response.msgResultado);
                    }
                })
            );
    }


    listarDocentes() {
        return this.http
            .get<Base>(`${this.baseUrl}capacitaciones-docentes`)
            .pipe(
                map((response: Base) => {
                    if (response.responseCode === 0) {
                        return response.response;
                    } else {
                        throw new Error(response.msgResultado);
                    }
                })
            );
    }


    guardarCapacitacion(parametro: any): Observable<Response> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this.http.post<Response>(`${this.baseUrl}capacitaciones`, parametro, {headers})
            .pipe(
                retry(1),
                //catchError(this.handleError),
                tap((data: any) =>
                    console.log('POST RESPONSE: ', data))
            );
    }

    obtenerDocumetoGestion(id: number) {
        return this.http
            .get<Base>(`${this.baseUrl}capacitaciones/`+id)
            .pipe(
                map((response: Base) => {
                        return response;
                })
            );
    }

    updateCapacitacion(documento: Capacitaciones): Observable<Base> {
        return this.http
            .put<Base>(`${this.baseUrl}capacitaciones/`+documento.id, documento)
            .pipe(
                map((response: Base) => {
                    return response;
                })
            );
    }

    deleteCapacitacion(id: number): Observable<Base> {
        return this.http
            .put<Base>(`${this.baseUrl}capacitaciones-eliminar/`+id, {})
            .pipe(
                map((response: Base) => {
                    return response;
                })
            );
    }


}
