import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';

@Injectable()
export class ItemServiceService {

  private url: string = 'http://tst.grupodimedservices.com.br/item/v3/itens/base/autocomplete?nome=parace&codigoFilial=101&maxResult=200&ordenarRentabilidade=true&ordenarPreco=false';

  constructor(private http: HttpClient) { }

  buscaItem(): Observable<>{
    
  }

}
