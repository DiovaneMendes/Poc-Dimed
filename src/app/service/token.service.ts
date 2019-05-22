import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TokenService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const autenticacao = req.clone({ 
      headers: req.headers.set('app-token', 'mCl6SnTQp6eT')
    });
    
    return next.handle(autenticacao);
  }
}
