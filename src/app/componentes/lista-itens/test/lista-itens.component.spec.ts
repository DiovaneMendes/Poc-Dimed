import { TabelaCategoriaComponent } from './../../tabela-categoria/tabela-categoria.component';
import { ListaAdvertenciaComponent } from './../../lista-advertencia/lista-advertencia.component';
import { ModalDetalhesComponent } from './../../modal-detalhes/modal-detalhes.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaItensComponent } from '../lista-itens.component';
import { ListaItensStub as stub } from '../test/lista-itens.stub';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('ListaItensComponent', () => {
  let component: ListaItensComponent;
  let fixture: ComponentFixture<ListaItensComponent>;
  let modal: NgbModal

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ListaItensComponent
      ],
      providers: [
        {provide: ListaItensComponent, useClass: stub},
        {provide: NgbModal, useClass: stub}
      ]
    })
    .compileComponents()
    .then(() => {
      modal = TestBed.get(NgbModal);
      fixture = TestBed.createComponent(ListaItensComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  describe('Dado que foi inserido uma descrição...', () => {
    it('Deve criar componente', () => {
      expect(component).toBeTruthy();
    });  
  });

  describe('Dado que escolha um item e clique no botão `Mais Detalhes`...', () => {
    let item = stub.getItem();

    beforeEach(() => {
      spyOn(modal, 'open').and.callFake(() => { });
      // spyOn(component, 'abrirModal').and.callFake(() => { });
    })

    it('Deve abrir modal', () => {
      // expect(component.abrirModal(stub.getItem())).toHaveBeenCalled();
      expect(component.abrirModal(item)).toHaveBeenCalled(); 

    });
  })
});
