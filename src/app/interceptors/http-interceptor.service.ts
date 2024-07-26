import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  
  constructor(
    private router: Router
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Definir un tipo para los encabezados
    let headers: { [name: string]: string } = {
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*'
    };
    
    // Añadir 'Accept' y 'Content-Type' solo si no están ya presentes en la solicitud
    if (!request.headers.has('Accept')) {
      headers['Accept'] = 'application/json';
    }
    if (!request.headers.has('Content-Type')) {
      headers['Content-Type'] = 'application/json; charset=utf-8';
    }
    
    console.log("headers->", headers);
    // Clonar la solicitud con los encabezados adicionales
    const modifiedRequest = request.clone({
      setHeaders: headers
    });

    // Enviar la solicitud modificada y manejar errores
    return next.handle(modifiedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        // Manejar el error según sea necesario
        console.error('Error en la solicitud HTTP:', error);
        return throwError(() => new Error(error.message));
      })
    );
    
  }
}