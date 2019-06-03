import { HttpClient } from '@angular/common/http';
import { ListaItensComponent } from './../../lista-itens/lista-itens.component';
import { ListaItem } from './../../../model/listaItem';
import { InputEntradaComponent } from './../../input-entrada/input-entrada.component';
import { ItemService } from '../../../service/item.service';
import { BarraNavegacaoComponent } from './../../barra-navegacao/barra-navegacao.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaInicialComponent } from '../tela-inicial.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TelaInicialStub as stub } from './tela-inicial.stub';
import { of, throwError } from 'rxjs';

describe('TelaInicialComponent', () => {
  let component: TelaInicialComponent;
  let fixture: ComponentFixture<TelaInicialComponent>;
  let service: ItemService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TelaInicialComponent,
        BarraNavegacaoComponent,
        InputEntradaComponent,
        ListaItensComponent
      ],
      imports: [
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [
        {provide: ItemService, useClass: stub},
        {provide: ListaItem},
        {provide: NgbModal},
        {provide: HttpClient}
      ]
    })
    .compileComponents()
    .then(() => {
      component = TestBed.get(ItemService);
      fixture = TestBed.createComponent(TelaInicialComponent);
      component = fixture.componentInstance;
      component.itens = [];
      service = fixture.debugElement.injector.get(ItemService);
    })
  }));

  it('Deve criar componente', () => {
    expect(component).toBeTruthy();
  });
  
  describe('Dado que o metodo [escolhaItem] tenha sido chamado ...', () => {
    describe('Dado que a descrição seja válida ...', () => {
      beforeEach(() => {
        spyOn(service, 'buscaBases').and.returnValue( of(stub.getItens()) );
        spyOn(component, 'listaFork');
        component.escolhaItem('tors');
      });
  
      it('Deve chamar o metodo [listaFork]', () => {
        expect(component.listaFork).toHaveBeenCalled();
      });
    });

    describe('Dado que a descrição seja inválida ...', () => {
      beforeEach(() => {
        spyOn(service, 'buscaBases').and.returnValue( throwError('') );
        spyOn(component, 'listaFork');
        spyOn(console, 'error');
        component.escolhaItem('tork');
      });

      it('Deve monstrar mensagem de erro', () => {
        expect(console.error).toHaveBeenCalledWith('Erro na busca pela descrição passada!');
      });
    });
  });
  
  describe('Dado que o metodo [listaFork] tenha sido chamado ...', () => {
    beforeEach(() => {
      spyOn(service, 'requestDetalheEstoque').and.returnValue( of(stub.getFork()) );
      spyOn(component, 'montaItem');
      component.listaFork(stub.getItens());
    });

    it('Deve chamar o metodo [montaItem]', () => {
      expect(component.montaItem).toHaveBeenCalled();
    });
  });

  describe('Dado que o metodo [montaItem] seja chamado ... ', () => {
    let itemIncompleto = stub.getItemIncompleto();
    let listaItem = stub.getListaItemDetalhes();
    let itemPronto = stub.getItem();    

    it('Deve montar um item', () => {
      expect(component.montaItem(itemIncompleto, listaItem)).toEqual(itemPronto);
    });
  });
});
