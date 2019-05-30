import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista-advertencia',
  templateUrl: './lista-advertencia.component.html',
  styleUrls: ['./lista-advertencia.component.css']
})

export class ListaAdvertenciaComponent{
  @Input() listaAdvertencias: string[];
}
