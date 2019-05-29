import { ModalDetalhesComponent } from './../modal-detalhes/modal-detalhes.component';
import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-lista-itens',
  templateUrl: './lista-itens.component.html',
  styleUrls: ['./lista-itens.component.css'],
  providers: [NgbModal]
})

export class ListaItensComponent{
  @Input() listaItens: Item[];

  constructor(private modalService: NgbModal) { }

  abrirModal(item: Item): void{
    const modalRef = this.modalService.open(ModalDetalhesComponent, { size: 'lg'});
    modalRef.componentInstance.item = item;
  }
}
