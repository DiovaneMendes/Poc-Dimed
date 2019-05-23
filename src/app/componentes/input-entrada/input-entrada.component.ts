import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-entrada',
  templateUrl: './input-entrada.component.html',
  styleUrls: ['./input-entrada.component.css']
})

export class InputEntradaComponent implements OnInit {
  @Input() valorDescricao: string = '';
  @Output() enviaDescricao = new EventEmitter();

  private descricao = new FormControl('');
  
  constructor() { }

  ngOnInit() { }

  resposta(): void {
    this.enviaDescricao.emit(this.descricao.value);
  }
}
