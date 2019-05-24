import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-entrada',
  templateUrl: './input-entrada.component.html',
  styleUrls: ['./input-entrada.component.css']
})

export class InputEntradaComponent implements OnInit {
  @Output() enviaDescricao = new EventEmitter();

  private descricao: string;
  
  constructor() { }

  ngOnInit() { }

  resposta(): void {
    this.enviaDescricao.emit(this.descricao);
  }
}