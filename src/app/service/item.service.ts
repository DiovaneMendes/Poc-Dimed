import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../model/item';

@Injectable()
export class ItemService implements HttpInterceptor{

  constructor(private http: HttpClient) { }

  buscaItens(nome): Observable<Item[]>{
    const url: string = `http://tst.grupodimedservices.com.br/item/v3/itens/base/autocomplete?nome=${nome}&codigoFilial=101&maxResult=200&ordenarRentabilidade=true&ordenarPreco=false`;

    return this.http.get<Item[]>(url);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const dupReq = req.clone({ headers: req.headers.set('app-token', 'mCl6SnTQp6eT')});

    return next.handle(dupReq);
  }

}
