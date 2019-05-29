import { Component, Input } from '@angular/core';
import { Item } from 'src/app/model/item';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-modal-detalhes',
  templateUrl: './modal-detalhes.component.html',
  styleUrls: ['./modal-detalhes.component.css'],
  providers: [NgbActiveModal]
})

export class ModalDetalhesComponent{
  @Input() item: Item;

  constructor(public activeModal: NgbActiveModal){ }
}
