import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment/environment';

@Injectable({
  providedIn: 'root'
})

export class SeguridadService {

  readonly urlApiBackend: string;
  readonly urlApiBackend2: string;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  
  constructor(
    private httpClient: HttpClient
  ) {
    this.urlApiBackend = environment.URL_API_BACKEND + 'seguridad';
    this.urlApiBackend2 = environment.URL_API_BACKEND + 'Login';
  }

  GetOpciones(model: String): Observable<any> {
    let prmObj = JSON.stringify(model);
    return this.httpClient.post<any>(this.urlApiBackend + '/opciones', prmObj, this.httpOptions);
  }

  LoadUser(model: String): Observable<any> {
    let prmObj = JSON.stringify(model);
    return this.httpClient.post<any>(this.urlApiBackend2 + '/loadUser', '{"token": ' + prmObj + '}', this.httpOptions);
  }

}
