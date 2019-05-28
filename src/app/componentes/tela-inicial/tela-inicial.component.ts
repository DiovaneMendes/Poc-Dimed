import { ListaItem } from './../../model/listaItem';
import { Builder } from 'builder-pattern';
import { Component } from '@angular/core';
import { ItemService } from 'src/app/service/item.service';
import { Item } from 'src/app/model/item';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css'],
  providers: [ItemService]
})

export class TelaInicialComponent{
  private itens: Item[];
  private itemPronto: ListaItem[];

  constructor(private itemService: ItemService) { }

  escolhaItem(enviaDescricao: string): void{

    this.itemService
        .buscaBases(enviaDescricao)
        .pipe(
          map(item => {
            this.itens = item.map((e) => {
              let fork = this.listaFork(e);
              
              return Builder<Item>()
                      .codigoItem(e.codigoItem)
                      .estoqueLoja(fork[1][0].estoqueLoja)
                      .precoPor(fork[0].itens[0].precoPor)
                      .nomenclaturaVarejo(e.nomenclaturaVarejo)
                      .ean(fork[0].itens[0].ean)
                      .origemDesconto(fork[0].itens[0].origemDesconto)
                      .precoDe(fork[0].itens[0].precoDe)
                      .nomenclatura(fork[0].itens[0].nomenclatura)
                      .nomenclaturaDetalhada(fork[0].itens[0].nomenclaturaDetalhada)
                      .principioAtivo(fork[0].itens[0].principioAtivo)
                      .classeTerapeutica(fork[0].itens[0].classeTerapeutica)
                      .situacaoItem(fork[0].itens[0].situacaoItem)
                      .advertencias(fork[0].itens[0].advertencias)
                      .categorias(fork[0].itens[0].categorias)
                    .build()
                  })
          })
        )
        .subscribe()
    
    console.log(this.itens);
    
  }

  listaFork(item: Item): ListaItem[]{    
    this.itemService
        .requestDetalheEstoque(item.codigoItem)
        .subscribe(e => this.itemPronto = e);
        
    return this.itemPronto;
  }
}


// Builder<Item>()
//   .codigoItem(e.codigoItem)
//   .estoqueLoja(fork[1][0].estoqueLoja)
//   .precoPor(fork[0].itens[0].precoPor)
//   .nomenclaturaVarejo(e.nomenclaturaVarejo)
//   .ean(fork[0].itens[0].ean)
//   .origemDesconto(fork[0].itens[0].origemDesconto)
//   .precoDe(fork[0].itens[0].precoDe)
//   .nomenclatura(fork[0].itens[0].nomenclatura)
//   .nomenclaturaDetalhada(fork[0].itens[0].nomenclaturaDetalhada)
//   .principioAtivo(fork[0].itens[0].principioAtivo)
//   .classeTerapeutica(fork[0].itens[0].classeTerapeutica)
//   .situacaoItem(fork[0].itens[0].situacaoItem)
//   .advertencias(fork[0].itens[0].advertencias)
//   .categorias(fork[0].itens[0].categorias)
// .build()