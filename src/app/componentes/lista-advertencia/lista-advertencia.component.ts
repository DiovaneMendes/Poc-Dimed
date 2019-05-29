import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-advertencia',
  templateUrl: './lista-advertencia.component.html',
  styleUrls: ['./lista-advertencia.component.css']
})

export class ListaAdvertenciaComponent implements OnInit {
  @Input() listaAdvertencias: string[];

  constructor() { }

  ngOnInit() {
    this.listaAdvertencias;
  }
}
