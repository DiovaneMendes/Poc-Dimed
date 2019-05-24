import { Component, OnInit, Input } from '@angular/core';
import { Base } from 'src/app/model/Base';

@Component({
  selector: 'app-lista-itens',
  templateUrl: './lista-itens.component.html',
  styleUrls: ['./lista-itens.component.css']
})

export class ListaItensComponent{
  @Input() listaItens: Base[];

  constructor() { }
}
