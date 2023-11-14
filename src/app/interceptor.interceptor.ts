import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { LocalStorageService } from './services/localstorage/local-storage.service';
import { Router } from '@angular/router';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private localStorageService:LocalStorageService, private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  
    const tokenDeAcesso = this.localStorageService.buscarItemLocalStorage('token');
  
    if(tokenDeAcesso !== null){

      request = request.clone({
        setHeaders:{
          Authorization: `Bearer ${tokenDeAcesso}`,
          'Content-type':'application/json; charset=UTF-8'
        }
      })
    }else{
      request = request.clone({
        setHeaders:{
          'Content-type':'application/json; charset=UTF-8'
        }
      })
    }
    return next.handle(request).pipe(
      catchError((error:any) => {
        if(error instanceof HttpErrorResponse){
          if(error.status === 401 || error.status === 403){
            this.localStorageService.deletarItemLocalStorage("token");
            this.router.navigate(["/login"])
          }
        }

        return throwError(error)
      }
      )
      
    );
  }
}
