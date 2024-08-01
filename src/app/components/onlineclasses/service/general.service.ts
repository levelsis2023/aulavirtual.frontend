import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

import { tap, map, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { ApiResponse, Base } from '../interface/general';
@Injectable({
  providedIn: 'root',
})
export class GeneralService {

  private baseUrl = `${environment.API_BASE}`;
  private urlparametro = `${environment.API_BASE}`;
  private permisosSubject = new BehaviorSubject<any[]>([]);
  permisos$ = this.permisosSubject.asObservable();

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

  editarCarreraTecnica(parametro: any): Observable<ApiResponse> {
    return this.http
      .put<ApiResponse>(`${this.baseUrl}carreras/${parametro.id}`, parametro, { observe: 'response' })
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
  eliminarCarreraTecnica(id: number): Observable<ApiResponse> {
    return this.http
      .delete<ApiResponse>(`${this.baseUrl}carreras/${id}`, { observe: 'response' })
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

      getTipoEvaluacion(){
        return this.http
        .get<ApiResponse>(`${this.baseUrl}parametros?tx_nombre=TIPO EVALUACIÓN`, { observe: 'response' })
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

      getTipoDePregunta(){
        return this.http
        .get<ApiResponse>(`${this.baseUrl}parametros?tx_nombre=TIPO DE PREGUNTA`, { observe: 'response' })
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


      getMaestros(domain_id:number) {
        return this.http
        .get<ApiResponse>(`${this.baseUrl}parametrosAll/${domain_id}`, { observe: 'response' })
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
  actualizarCurso(parametro: any): Observable<ApiResponse> {
    return this.http
      .put<ApiResponse>(`${this.baseUrl}cursos/${parametro.cursoId}`, parametro, { observe: 'response' })
      .pipe(
        tap((response: HttpResponse<ApiResponse>) => {
          console.log('HTTP Status Code:', response.status);
        }),
        map((response: HttpResponse<ApiResponse>) => {
          console.log('Response body:', response.body);
          if (response.status === 200 && response.body) {
            return response.body;
          } else {
            throw new Error(response.body ? response.body.responseMessage : 'Unknown error');
          }
        })
      );
  }
  eliminarCurso(id: number): Observable<ApiResponse> {
    return this.http
      .delete<ApiResponse>(`${this.baseUrl}cursos/${id}`, { observe: 'response' })
      .pipe(
        tap((response: HttpResponse<ApiResponse>) => {
          console.log('HTTP Status Code:', response.status);
        }),
        map((response: HttpResponse<ApiResponse>) => {
          console.log('Response body:', response.body);
          if (response.status === 200 && response.body) {
            return response.body;
          } else {
            throw new Error(response.body ? response.body.responseMessage : 'Unknown error');
          }
        })
      );
  }
  getCursos(id: number) {
    return this.http
      .get<ApiResponse>(`${this.baseUrl}cursos/carrera/${id}`, { observe: 'response' })
      .pipe(
        tap((response: HttpResponse<ApiResponse>) => {
          console.log('HTTP Status Code:', response.status);
        }),
        map((response: HttpResponse<ApiResponse>) => {
          console.log('Response body:', response.body);
          if (response.status === 200 && response.body) {
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
          if (response.status === 200 && response.body) {
            return response.body;
          } else {
            throw new Error(response.body ? response.body.responseMessage : 'Unknown error');
          }
        })
      );
  }

  

  getModuloFormativo() {
    return this.http
      .get<ApiResponse>(`${this.baseUrl}parametros?tx_nombre=MÓDULOS FORMATIVOS`, { observe: 'response' })
      .pipe(
        tap((response: HttpResponse<ApiResponse>) => {
          console.log('HTTP Status Code:', response.status);
        }),
        map((response: HttpResponse<ApiResponse>) => {
          console.log('Response body:', response.body);
          if (response.status === 200 && response.body) {
            return response.body;
          } else {
            throw new Error(response.body ? response.body.responseMessage : 'Unknown error');
          }
        })
      );
  }
  getEstados() {
    return this.http
      .get<ApiResponse>(`${this.baseUrl}parametros?tx_nombre=ESTADO CURSO`, { observe: 'response' })
      .pipe(
        tap((response: HttpResponse<ApiResponse>) => {
          console.log('HTTP Status Code:', response.status);
        }),
        map((response: HttpResponse<ApiResponse>) => {
          console.log('Response body:', response.body);
          if (response.status === 200 && response.body) {
            return response.body;
          } else {
            throw new Error(response.body ? response.body.responseMessage : 'Unknown error');
          }
        })
      );
    
  }


      



  getMaestrosRecursive(domain_id: number): Observable<ApiResponse> {
    return this.http
      .get<ApiResponse>(`${this.baseUrl}parametrosRecursive/${domain_id}`, { observe: 'response' })
      .pipe(
        tap((response: HttpResponse<ApiResponse>) => {
          console.log('HTTP Status Code:', response.status);
        }),
        map((response: HttpResponse<ApiResponse>) => {
          console.log('Response body:', response.body);
          if (response.status === 200 && response.body) {
            return response.body;
          } else {
            throw new Error(response.body ? response.body.responseMessage : 'Unknown error');
          }
        })
      );
  }

  eliminarParametro(id: number): Observable<ApiResponse> {
    return this.http
      .delete<ApiResponse>(`${this.baseUrl}parametros/${id}`, { observe: 'response' })
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

  guardarParametro(parametro: any): Observable<ApiResponse> {
    return this.http
      .post<ApiResponse>(`${this.baseUrl}parametros`, parametro, { observe: 'response' })
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

  updateParametro(parametro: any): Observable<ApiResponse> {
    return this.http
      .put<ApiResponse>(`${this.baseUrl}parametros/${parametro.id}`, parametro, { observe: 'response' })
      .pipe(
        tap((response: HttpResponse<ApiResponse>) => {
          console.log('HTTP Status Code:', response.status);
        }),
        map((response: HttpResponse<ApiResponse>) => {
          console.log('Response body:', response.body);
          if (response.status === 200 && response.body) {
            return response.body;
          } else {
            throw new Error(response.body ? response.body.responseMessage : 'Unknown error');
          }
        })
      );
  }





      getGrupoEvaluaciones(parametro: any): Observable<ApiResponse> {
        return this.http
        .get<ApiResponse>(`${this.baseUrl}grupo-de-evaluaciones/${parametro.id}`, { observe: 'response' })
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


  guardarGrupoEvaluaciones(parametro: any): Observable<ApiResponse> {
    return this.http
      .post<ApiResponse>(`${this.baseUrl}grupo-de-evaluaciones`, parametro, { observe: 'response' })
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

  actualizarGrupoEvaluaciones(parametro: any): Observable<ApiResponse> {
    return this.http
      .put<ApiResponse>(`${this.baseUrl}grupo-de-evaluaciones/${parametro.id}`, parametro, { observe: 'response' })
      .pipe(
        tap((response: HttpResponse<ApiResponse>) => {
          console.log('HTTP Status Code:', response.status);
        }),
        map((response: HttpResponse<ApiResponse>) => {
          console.log('Response body:', response.body);
          if (response.status === 200 && response.body) {
            return response.body;
          } else {
            throw new Error(response.body ? response.body.responseMessage : 'Unknown error');
          }
        })
      );
  }


  eliminarGrupoEvaluaciones(id: number): Observable<ApiResponse> {
    return this.http
      .delete<ApiResponse>(`${this.baseUrl}grupo-de-evaluaciones/${id}`, { observe: 'response' })
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




  // Obtén permisos del backend







  fetchPermisos(rolId: number): void {
    this.http.get<any[]>(`${this.urlparametro}rol/get-rol-permiso/${rolId}`).subscribe(permisos => {
      this.permisosSubject.next(permisos);
    });
  }

  // Verifica si el usuario tiene un permiso específico
  tienePermiso(nombrePermiso: string): boolean {
    const permisos = this.permisosSubject.getValue();
    return permisos.some(permiso => permiso.nombre === nombrePermiso);
  }



  getCarrerasTecnicas(domain_id:number) {
    return this.http
      .get<ApiResponse>(`${this.baseUrl}carreras-list/${domain_id}`, { observe: 'response' })
      .pipe(
        tap((response: HttpResponse<ApiResponse>) => {
          console.log('HTTP Status Code:', response.status);
        }),
        map((response: HttpResponse<ApiResponse>) => {
          console.log('Response body:', response.body);
          if (response.status === 200 && response.body) {
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

 
  getCiclo() {
    return this.http
      .get<ApiResponse>(`${this.baseUrl}parametros?tx_nombre=ciclos`, { observe: 'response' })
      .pipe(
        tap((response: HttpResponse<ApiResponse>) => {
          console.log('HTTP Status Code:', response.status);
        }),
        map((response: HttpResponse<ApiResponse>) => {
          console.log('Response body:', response.body);
          if (response.status === 200 && response.body) {
            return response.body;
          } else {
            throw new Error(response.body ? response.body.responseMessage : 'Unknown error');
          }
        })
      );
  }





  getRoles() {
    return this.http
      .get<ApiResponse>(`${this.urlparametro}roles`, { observe: 'response' })
      .pipe(
        tap((response: HttpResponse<ApiResponse>) => {
          console.log('HTTP Status Code:', response.status);
        }),
        map((response: HttpResponse<ApiResponse>) => {
          console.log('Response body:', response.body);
          if (response.status === 200 && response.body) {
            return response.body;
          } else {
            throw new Error(response.body ? response.body.responseMessage : 'Unknown error');
          }
        })
      );
  }

  getRol(id: number) {
    return this.http
      .get<ApiResponse>(`${this.urlparametro}rol/${id}`, { observe: 'response' })
      .pipe(
        tap((response: HttpResponse<ApiResponse>) => {
          console.log('HTTP Status Code:', response.status);
        }),
        map((response: HttpResponse<ApiResponse>) => {
          console.log('Response body:', response.body);
          if (response.status === 200 && response.body) {
            return response.body;
          } else {
            throw new Error(response.body ? response.body.responseMessage : 'Unknown error');
          }
        })
      );
  }

  guardarRol(parametro: any): Observable<ApiResponse> {
    return this.http
      .post<ApiResponse>(`${this.urlparametro}rol/guardar`, parametro, { observe: 'response' })
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

  guardarRolPermisos(parametro: any): Observable<ApiResponse> {
    return this.http
      .post<ApiResponse>(`${this.urlparametro}rol/guardar-permiso`, parametro, { observe: 'response' })
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


  actualizarRol(parametro: any, id: number): Observable<ApiResponse> {
    return this.http
      .put<ApiResponse>(`${this.urlparametro}rol/guardar/${id}`, parametro, { observe: 'response' })
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


  eliminarRol(id: number): Observable<ApiResponse> {
    return this.http
      .delete<ApiResponse>(`${this.urlparametro}rol/eliminar/${id}`, { observe: 'response' })
      .pipe(
        tap((response: HttpResponse<ApiResponse>) => {
          console.log('HTTP Status Code:', response.status);
        }),
        map((response: HttpResponse<ApiResponse>) => {
          console.log('Response body:', response.body);
          if (response.status === 200 && response.body) {
            return response.body;
          } else {
            throw new Error(response.body ? response.body.responseMessage : 'Unknown error');
          }
        }),
        catchError(error => {
          console.error('Error occurred:', error);
          return throwError(error);
        })
      );
  }





  getEmpresas() {
    return this.http
      .get<ApiResponse>(`${this.urlparametro}empresas`, { observe: 'response' })
      .pipe(
        tap((response: HttpResponse<ApiResponse>) => {
          console.log('HTTP Status Code:', response.status);
        }),
        map((response: HttpResponse<ApiResponse>) => {
          console.log('Response body:', response.body);
          if (response.status === 200 && response.body) {
            return response.body;
          } else {
            throw new Error(response.body ? response.body.responseMessage : 'Unknown error');
          }
        })
      );
  }

  getEmpresa(id: number) {
    return this.http
      .get<ApiResponse>(`${this.urlparametro}empresa/${id}`, { observe: 'response' })
      .pipe(
        tap((response: HttpResponse<ApiResponse>) => {
          console.log('HTTP Status Code:', response.status);
        }),
        map((response: HttpResponse<ApiResponse>) => {
          console.log('Response body:', response.body);
          if (response.status === 200 && response.body) {
            return response.body;
          } else {
            throw new Error(response.body ? response.body.responseMessage : 'Unknown error');
          }
        })
      );
  }

  guardarEmpresa(parametro: any): Observable<ApiResponse> {
    return this.http
      .post<ApiResponse>(`${this.urlparametro}empresa/guardar`, parametro, { observe: 'response' })
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


  actualizarEmpresa(parametro: any, id: number): Observable<ApiResponse> {
    return this.http
      .put<ApiResponse>(`${this.urlparametro}empresa/guardar/${id}`, parametro, { observe: 'response' })
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

  eliminarEmpresa(id: number): Observable<ApiResponse> {
    return this.http
      .delete<ApiResponse>(`${this.urlparametro}empresa/eliminar/${id}`, { observe: 'response' })
      .pipe(
        tap((response: HttpResponse<ApiResponse>) => {
          console.log('HTTP Status Code:', response.status);
        }),
        map((response: HttpResponse<ApiResponse>) => {
          console.log('Response body:', response.body);
          if (response.status === 200 && response.body) {
            return response.body;
          } else {
            throw new Error(response.body ? response.body.responseMessage : 'Unknown error');
          }
        }),
        catchError(error => {
          console.error('Error occurred:', error);
          return throwError(error);
        })
      );
  }


  getPermisos() {
    return this.http
      .get<ApiResponse>(`${this.urlparametro}permisos`, { observe: 'response' })
      .pipe(
        tap((response: HttpResponse<ApiResponse>) => {
          console.log('HTTP Status Code:', response.status);
        }),
        map((response: HttpResponse<ApiResponse>) => {
          console.log('Response body:', response.body);
          if (response.status === 200 && response.body) {
            return response.body;
          } else {
            throw new Error(response.body ? response.body.responseMessage : 'Unknown error');
          }
        })
      );
  }

  getRolPermisos(rolId: number): Observable<any[]> {
    return this.http
      .get<any>(`${this.urlparametro}rol/get-rol-permiso/${rolId}`, { observe: 'response' })
      .pipe(
        tap((response: HttpResponse<any>) => {
          console.log('HTTP Status Code:', response.status);
        }),
        map((response: HttpResponse<any>) => {
          console.log('Response body:', response.body);
          if (response.status === 200 && response.body) {
            return response.body;
          } else {
            throw new Error(response.body ? response.body?.responseMessage : 'Unknown error');
          }
        })
      );
  }




      getListadoDeEvaluacionesPorGrupo(parametro: any): Observable<ApiResponse> {
        return this.http
        .get<ApiResponse>(`${this.baseUrl}evaluaciones/${parametro.id}`, { observe: 'response' })
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
      guardarEvaluacion(parametro: any): Observable<ApiResponse> {
        return this.http
          .post<ApiResponse>(`${this.baseUrl}evaluaciones`, parametro, { observe: 'response' })
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

      actualizarListadoDeEvaluacionesPorGrupo(parametro: any): Observable<ApiResponse> {
        return this.http
          .put<ApiResponse>(`${this.baseUrl}evaluaciones/${parametro.id}`, parametro, { observe: 'response' })
          .pipe(
            tap((response: HttpResponse<ApiResponse>) => {
              console.log('HTTP Status Code:', response.status);
            }),
            map((response: HttpResponse<ApiResponse>) => {
              console.log('Response body:', response.body);
              if (response.status === 200 && response.body) {
                return response.body;
              } else {
                throw new Error(response.body ? response.body.responseMessage : 'Unknown error');
              }
            })
          );
            
      }
      getAlumnosCurso(domainId: number,cursoId: number) {
        return this.http
            .get<ApiResponse>(`${this.baseUrl}participantes/${domainId}/${cursoId}`, { observe: 'response' })
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
      updateAlumnoCurso(data: any): Observable<ApiResponse> {
       
        return this.http
            .post<ApiResponse>(`${this.baseUrl}participantes`, data, { observe: 'response' })
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


      eliminarListadoDeEvaluacionesPorGrupo(id: number): Observable<ApiResponse> {
        return this.http
          .delete<ApiResponse>(`${this.baseUrl}evaluaciones/${id}`, { observe: 'response' })
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

}