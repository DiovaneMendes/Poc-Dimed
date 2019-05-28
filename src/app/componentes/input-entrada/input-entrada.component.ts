import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-entrada',
  templateUrl: './input-entrada.component.html',
  styleUrls: ['./input-entrada.component.css']
})

export class InputEntradaComponent {
  @Output() enviaDescricao = new EventEmitter();

  private descricao: string;
  
  constructor(){ }

  resposta(): void {
    this.enviaDescricao.emit(this.descricao);
  }
}