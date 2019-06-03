import { ListaAdvertenciaComponent } from './../../lista-advertencia/lista-advertencia.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaItensComponent } from '../lista-itens.component';
import { ListaItensStub as stub } from '../test/lista-itens.stub';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDetalhesComponent } from '../../modal-detalhes/modal-detalhes.component';
import { TabelaCategoriaComponent } from '../../tabela-categoria/tabela-categoria.component';

describe('ListaItensComponent', () => {
  let component: ListaItensComponent;
  let fixture: ComponentFixture<ListaItensComponent>;
  let componentModal: ModalDetalhesComponent;
  let fixtureModal: ComponentFixture<ModalDetalhesComponent>;
  let modal: NgbModal;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ListaItensComponent,
        ModalDetalhesComponent,
        ListaAdvertenciaComponent,
        TabelaCategoriaComponent
      ],
      providers: [
        NgbActiveModal,
        {provide: ListaItensComponent, useClass: stub},
        {provide: NgbModal, useClass: stub}
      ]
    })
    .compileComponents()
    .then(() => {
      fixtureModal = TestBed.createComponent(ModalDetalhesComponent);
      componentModal = fixtureModal.componentInstance;
      component = TestBed.get(NgbModal);
      fixture = TestBed.createComponent(ListaItensComponent);
      component = fixture.componentInstance;
      modal = fixture.debugElement.injector.get(NgbModal);
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
      spyOn(modal, 'open').and.callFake(() => { 
        return fixtureModal;
      });
      component.abrirModal(item);
    })

    it('Deve abrir modal', () => {
      expect(modal.open).toHaveBeenCalled();
    });

    it('Deve ter um item já setado', () => {
      expect(componentModal.item).toEqual(item);
    });
  })
});
