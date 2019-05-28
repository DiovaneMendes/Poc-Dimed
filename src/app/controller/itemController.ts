import { map, switchMap, delay, debounceTime } from 'rxjs/operators';
import { Item } from '../model/item';
import { ItemService } from '../service/item.service';
import { Observable } from 'rxjs';

export class ItemController{
  // private static service: ItemService;
  private itens: Item[];

  constructor(){
    // this.service = service;
  }

  // public montaItem(descricao: string): Item[]{
  //   let itens: Item[] = this.buscaTodos(descricao);

  //   itens.map(e => this.service.buscaDetalhe(e.codigoItem))

  //   console.log(itens);
    
  //   return itens;
  // }

  public buscaTodos(service: ItemService, descricao: string): Item[]{
    let itens: Item[];

    // service.buscaBases(descricao).subscribe(e => itens = e)
    console.log('>>>',itens);
    
    return itens;
  }
}