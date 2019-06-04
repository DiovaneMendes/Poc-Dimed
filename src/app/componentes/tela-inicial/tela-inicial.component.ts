import { ListaItem } from './../../model/listaItem';
import { Builder } from 'builder-pattern';
import { Component } from '@angular/core';
import { ItemService } from 'src/app/service/item-service/item.service';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css'],
  providers: [ItemService]
})

export class TelaInicialComponent{
  public mensagemAlerta: string = '';

  public itens: Item[];

  constructor(private itemService: ItemService) { }

  escolhaItem(enviaDescricao: string): void{
    this.itemService
        .buscaBases(enviaDescricao)
        .subscribe({
          next: e => {
            this.listaFork(e)
          },
          error: () => { this.mensagemAlerta = 'Houve um erro na busca do item!' }
        });
  }

  listaFork(listaItens: Item[]): void{
    this.itens = listaItens.filter(item => {
      this.itemService
          .requestDetalheEstoque(item.codigoItem)
          .subscribe({
            next: e => {
              this.itens.push(this.montaItem(item, e))
            },
            error: () => { this.mensagemAlerta = 'Houve um erro interno!' }
          });
    });
  }

  montaItem(item: Item, fork: ListaItem[]): Item{
    return Builder<Item>()
            .codigoItem(item.codigoItem)
            .estoqueLoja(fork[1][0].estoqueLoja)
            .precoPor(fork[0].itens[0].precoPor)
            .nomenclaturaVarejo(item.nomenclaturaVarejo)
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
  }
}
