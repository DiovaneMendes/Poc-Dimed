import { ListaAdvertenciaComponent } from '../../lista-advertencia/lista-advertencia.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetalhesComponent } from '../modal-detalhes.component';
import { TabelaCategoriaComponent } from '../../tabela-categoria/tabela-categoria.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDetalhesStub as stub } from './modal-detalhes.stub';

describe('ModalDetalhesComponent', () => {
  let component: ModalDetalhesComponent;
  let fixture: ComponentFixture<ModalDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDetalhesComponent, ListaAdvertenciaComponent, TabelaCategoriaComponent ],
      imports: [
        
      ],
      providers: [
        {provide: NgbActiveModal},
        {provide: ModalDetalhesComponent, useClass: stub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    component = TestBed.get(NgbActiveModal);
    fixture = TestBed.createComponent(ModalDetalhesComponent);
    component = fixture.componentInstance;
    component.item = stub.getItem();
    fixture.detectChanges();
  });

  it('Deve criar component', () => {
    expect(component.item).toBeTruthy();
  });
});
