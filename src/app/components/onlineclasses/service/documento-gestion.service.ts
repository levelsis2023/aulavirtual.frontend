import {Injectable} from '@angular/core';
import {HttpBackend, HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from 'src/environments/environment.development';

import {map, retry, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ApiResponse, Base, DocumentoGestion} from '../interface/general';

@Injectable({
    providedIn: 'root',
})
export class DocumentoGestionService {

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
            .get<string>(`${this.urlparametro}documento-gestion-codigo`)
            .pipe(
                map((response: any) => {
                        return response;
                })
            );
    }


    listarDocumentosGestion() {
        return this.http
            .get<Base>(`${this.baseUrl}documento-gestion`)
            .pipe(
                map((response: Base) => {
                    console.log('RESPUESTA::::::::::::::::', response)
                    if (response.responseCode === 0) {
                        return response.response;
                    } else {
                        throw new Error(response.msgResultado);
                    }
                })
            );
    }


    guardarDocumentoGestion(parametro: any): Observable<Response> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this.http.post<Response>(`${this.baseUrl}documento-gestion`, parametro, {headers})
            .pipe(
                retry(1),
                //catchError(this.handleError),
                tap((data: any) =>
                    console.log('POST RESPONSE: ', data))
            );
    }

    obtenerDocumetoGestion(id: number) {
        return this.http
            .get<Base>(`${this.baseUrl}documento-gestion/`+id)
            .pipe(
                map((response: Base) => {
                    console.log('RESPUESTA GET BY ID::::::::::::::::', response)
                        return response;
                })
            );
    }

    updateDocumentoGestion(documento: DocumentoGestion): Observable<Base> {
        return this.http
            .put<Base>(`${this.baseUrl}documento-gestion/`+documento.id, documento)
            .pipe(
                map((response: Base) => {
                    return response;
                })
            );
    }

    deleteDocumentoGestion(id: number): Observable<Base> {
        return this.http
            .put<Base>(`${this.baseUrl}documento-gestion-eliminar/`+id, {})
            .pipe(
                map((response: Base) => {
                    return response;
                })
            );
    }


}
