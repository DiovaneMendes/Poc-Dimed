import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/service/item.service';
import { Subject } from 'rxjs';
import { switchMap, debounceTime, map } from 'rxjs/operators'
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css'],
  providers: [ItemService]
})

export class TelaInicialComponent implements OnInit {
  private itens : Item[];
  // private filtraDescricao: Subject<string> = new Subject<string>();

  constructor(private itemService: ItemService) { }

  ngOnInit() { }

  escolhaItem(enviaDescricao: string): Item[]{
    // this.filtraDescricao.next(enviaDescricao);

    // this.filtraDescricao
    //     .pipe(
    //       debounceTime(300),
    //       switchMap(descricao => 
    //         this.itemService.buscaBases(descricao)
    //       ))
    //     .subscribe(e => this.itens = e );


    this.itemService
        .buscaBases(enviaDescricao)
        .subscribe(e => this.itens = e);

    // this.itemService
    //     .buscaDetalhe(822810)
    //     .subscribe(e => console.log(e));

    this.itemService
        .buscaEstoque(822810)
        .subscribe(e => console.log(e));

    return this.itens;
  }
}