import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/service/item.service';
import { Base } from 'src/app/model/Base';
import { Subject } from 'rxjs';
import { switchMap, debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css'],
  providers: [ItemService]
})

export class TelaInicialComponent implements OnInit {
  private itens : Base[];
  private filtraDescricao: Subject<string> = new Subject<string>();

  constructor(private itemService: ItemService) { }

  ngOnInit() { }

  escolhaItem(enviaDescricao: string): Base[]{
    this.filtraDescricao.next(enviaDescricao);

    this.filtraDescricao
        .pipe(
          debounceTime(300),
          switchMap(descricao => this.itemService.buscaItens(descricao)))
        .subscribe(e => this.itens = e );

    return this.itens;
  }
}