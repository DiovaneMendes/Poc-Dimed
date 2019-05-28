import { ItemDetalhe } from './itemDetalhe';

export class ListaItem{
  itens: ItemDetalhe[];

  constructor(itens: ItemDetalhe[]){
    this.itens = itens;
  }
}