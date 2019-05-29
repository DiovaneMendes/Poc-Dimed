import { ModalDetalhesComponent } from './../modal-detalhes/modal-detalhes.component';
import { Component, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-lista-itens',
  templateUrl: './lista-itens.component.html',
  styleUrls: ['./lista-itens.component.css'],
  providers: [BsModalRef, BsModalService]
})

export class ListaItensComponent{
  @Input() listaItens: Item[];
  private modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  abrirModal(item: Item): void{
    const initialState = {
      item: item
    };

    this.modalRef = this.modalService.show(ModalDetalhesComponent, {initialState});
    this.modalRef.content.closeBtnName = 'Close';
  }
}
