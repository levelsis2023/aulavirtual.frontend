import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApiResponse, Base } from '../interface/general';
@Injectable({
    providedIn: 'root',
})
export class GeneralService {

    private baseUrl = `${environment.API_BASE}`;    
    private urlparametro = `${environment.API_BASE}`;

    constructor(
        private http: HttpClient,
        private httpClientFormData: HttpClient,
        public handler: HttpBackend,
    ) {
        this.httpClientFormData = new HttpClient(this.handler);
    }

    getAllParametro() {
        return this.http
            .get<ApiResponse>(`${this.urlparametro}parametros`)
            .pipe(
                map((response: ApiResponse) => {
                    if (response.responseCode === '0') {
                        return response.response;
                    } else {
                        throw new Error(response.responseMessage);
                    }
                })
            );
    }
    listarmiembros() {
        return this.http
            .get<Base>(`${this.baseUrl}parametros`)
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

}