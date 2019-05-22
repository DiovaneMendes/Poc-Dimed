import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../model/item';

@Injectable()
export class ItemService{

  constructor(private http: HttpClient) { }

  buscaItens(nome): Observable<Item[]>{
    const url: string = `http://api-int.grupodimedservices.com.br/tst/item/v3/itens/base/autocomplete?nome=${nome}&codigoFilial=101&maxResult=200&ordenarRentabilidade=true&ordenarPreco=false`;

    return this.http.get<Item[]>(url);
  }
}
