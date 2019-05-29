import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-modal-detalhes',
  templateUrl: './modal-detalhes.component.html',
  styleUrls: ['./modal-detalhes.component.css'],
  providers: [BsModalRef]
})

export class ModalDetalhesComponent implements OnInit{
  private item: Item;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(){
    this.item;
    console.log(this.item);    
  }
}
