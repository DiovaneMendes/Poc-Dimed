import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.component.html',
  styleUrls: ['./informacoes.component.css']
})

export class InformacoesComponent implements OnInit {
  @Input() listaItens: Item[];

  constructor() { }

  ngOnInit() {
  }

}
