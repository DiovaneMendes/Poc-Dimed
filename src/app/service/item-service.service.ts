import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../model/item';

@Injectable()
export class ItemServiceService {

  constructor(private http: HttpClient) { }

  buscaItem(nome): Observable<Item[]>{
    const url: string = `http://tst.grupodimedservices.com.br/item/v3/itens/base/autocomplete?nome=${nome}&codigoFilial=101&maxResult=200&ordenarRentabilidade=true&ordenarPreco=false`;

    return this.http.get<Item[]>(url);
  }

}
