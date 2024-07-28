import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient,HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

import { tap,map } from 'rxjs/operators';
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

    getCarrerasTecnicas() {
        return this.http
            .get<ApiResponse>(`${this.baseUrl}carreras`, { observe: 'response' })
            .pipe(
                tap((response: HttpResponse<ApiResponse>) => {
                    console.log('HTTP Status Code:', response.status);
                }),
                map((response: HttpResponse<ApiResponse>) => {
                    console.log('Response body:', response.body);
                    if (response.status === 200 && response.body ) {
                        return response.body;
                    } else {
                        throw new Error(response.body ? response.body.responseMessage : 'Unknown error');
                    }
                })
            );
    }

    guardarCarreraTecnica(parametro: any): Observable<ApiResponse> {
        return this.http
          .post<ApiResponse>(`${this.baseUrl}carreras`, parametro, { observe: 'response' })
          .pipe(
            tap((response: HttpResponse<ApiResponse>) => {
              console.log('HTTP Status Code:', response.status);
            }),
            map((response: HttpResponse<ApiResponse>) => {
              console.log('Response body:', response.body);
              if (response.status === 201 && response.body) {
                return response.body;
              } else {
                throw new Error(response.body ? response.body.responseMessage : 'Unknown error');
              }
            })
          );
      }

      guardarCurso(parametro: any): Observable<ApiResponse> {
        return this.http
          .post<ApiResponse>(`${this.baseUrl}cursos`, parametro, { observe: 'response' })
          .pipe(
            tap((response: HttpResponse<ApiResponse>) => {
              console.log('HTTP Status Code:', response.status);
            }),
            map((response: HttpResponse<ApiResponse>) => {
              console.log('Response body:', response.body);
              if (response.status === 201 && response.body) {
                return response.body;
              } else {
                throw new Error(response.body ? response.body.responseMessage : 'Unknown error');
              }
            })
          );
      }
 
      getAreaDeFormacion() {
        return this.http
            .get<ApiResponse>(`${this.baseUrl}parametros?tx_nombre=area_de_formacion`, { observe: 'response' })
            .pipe(
                tap((response: HttpResponse<ApiResponse>) => {
                    console.log('HTTP Status Code:', response.status);
                }),
                map((response: HttpResponse<ApiResponse>) => {
                    console.log('Response body:', response.body);
                    if (response.status === 200 && response.body ) {
                        return response.body;
                    } else {
                        throw new Error(response.body ? response.body.responseMessage : 'Unknown error');
                    }
                })
            );
      }

      getCiclo() {
        return this.http
            .get<ApiResponse>(`${this.baseUrl}parametros?tx_nombre=ciclo`, { observe: 'response' })
            .pipe(
                tap((response: HttpResponse<ApiResponse>) => {
                    console.log('HTTP Status Code:', response.status);
                }),
                map((response: HttpResponse<ApiResponse>) => {
                    console.log('Response body:', response.body);
                    if (response.status === 200 && response.body ) {
                        return response.body;
                    } else {
                        throw new Error(response.body ? response.body.responseMessage : 'Unknown error');
                    }
                })
            );
      }

      getModuloFormativo() {
        return this.http
            .get<ApiResponse>(`${this.baseUrl}parametros?tx_nombre=modulo_formativo`, { observe: 'response' })
            .pipe(
                tap((response: HttpResponse<ApiResponse>) => {
                    console.log('HTTP Status Code:', response.status);
                }),
                map((response: HttpResponse<ApiResponse>) => {
                    console.log('Response body:', response.body);
                    if (response.status === 200 && response.body ) {
                        return response.body;
                    } else {
                        throw new Error(response.body ? response.body.responseMessage : 'Unknown error');
                    }
                })
            );
      }


}