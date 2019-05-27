import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../model/item';
import { detalhe } from '../model/detalhe';

@Injectable()
export class ItemService{
  constructor(private http: HttpClient) { }

  buscaBases(nome: string): Observable<Item[]>{
    const url: string = `http://api-int.grupodimedservices.com.br/tst/item/v3/itens/base/autocomplete?nome=${nome}&codigoFilial=101&maxResult=10&ordenarRentabilidade=true&ordenarPreco=false`;

    return this.http.get<Item[]>(url);
  }

  buscaDetalhe(codigoItem: number): Observable<Item>{
    const url: string = `http://api-int.grupodimedservices.com.br/tst/mostruario/v3/itens/detalhe`;
    detalhe.itens[0].codigo = codigoItem;

    return this.http.post<Item>(url, detalhe);
  }
}
