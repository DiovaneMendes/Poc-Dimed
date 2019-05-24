import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-input-entrada',
  templateUrl: './input-entrada.component.html',
  styleUrls: ['./input-entrada.component.css']
})

export class InputEntradaComponent implements OnInit {
  @Input() valorDescricao: string = '';
  @Output() enviaDescricao = new EventEmitter();

  private descricao: string;
  
  constructor() { }

  ngOnInit() { }

  resposta(): void {
    this.enviaDescricao.emit(this.descricao);
  }
}