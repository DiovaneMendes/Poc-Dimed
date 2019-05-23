import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from 'src/app/service/item.service';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css'],
  providers: [ItemService]
})

export class TelaInicialComponent implements OnInit {
  itens : Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit() { }

  escolhaItens(enviaDescricao): Item[]{
    this.itemService.buscaItens(enviaDescricao)
      .subscribe(e => {
        this.itens = e;
        console.log(">>>>>>>>>>>>>> AQUI!" + this.itens);
      });
    
    return this.itens;
  }
}