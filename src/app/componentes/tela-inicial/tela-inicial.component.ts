import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from 'src/app/service/item.service';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})

export class TelaInicialComponent implements OnInit {
  private itens : Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    return this.itemService.buscaItens('parace')
      .subscribe(e => {
        this.itens = e;     
      });
  }
}