import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Base } from '../model/Base';

@Injectable()
export class ItemService{
  constructor(private http: HttpClient) { }

  buscaItens(nome: string): Observable<Base[]>{
    const url: string = `http://api-int.grupodimedservices.com.br/tst/item/v3/itens/base/autocomplete?nome=${nome}&codigoFilial=101&maxResult=200&ordenarRentabilidade=true&ordenarPreco=false`;

    return this.http.get<Base[]>(url);
  }
}
