import { Component, OnInit, Input } from '@angular/core';
import { Categoria } from 'src/app/model/categoria';

@Component({
  selector: 'app-tabela-categoria',
  templateUrl: './tabela-categoria.component.html',
  styleUrls: ['./tabela-categoria.component.css']
})

export class TabelaCategoriaComponent implements OnInit {
  @Input() listaCategorias: Categoria[];

  constructor() { }

  ngOnInit() {
    this.listaCategorias;
  }
}