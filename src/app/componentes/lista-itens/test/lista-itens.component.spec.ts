import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaItensComponent } from '../lista-itens.component';
import { ListaItensStub as stub } from '../test/lista-itens.stub';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDetalhesComponent } from '../../modal-detalhes/modal-detalhes.component';

describe('ListaItensComponent', () => {
  let component: ListaItensComponent;
  let fixture: ComponentFixture<ListaItensComponent>;
  let modal: NgbModal;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ListaItensComponent
      ],
      providers: [
        {provide: ListaItensComponent, useClass: stub},
        {provide: NgbModal, useClass: stub},
        {provide: ModalDetalhesComponent}
      ]
    })
    .compileComponents()
    .then(() => {
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
      spyOn(modal, 'open').and.callFake(() => { });
      modal.open(ModalDetalhesComponent).componentInstance.item = stub.getItem();
      spyOn(component, 'abrirModal').and.callFake(() => { });
    })

    it('Deve abrir modal', () => {
      expect(component.abrirModal(stub.getItem())).toHaveBeenCalled();
    });
  })
});
