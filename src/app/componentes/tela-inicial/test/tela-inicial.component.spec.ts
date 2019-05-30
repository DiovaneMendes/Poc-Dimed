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

describe('TelaInicialComponent', () => {
  let component: TelaInicialComponent;
  let fixture: ComponentFixture<TelaInicialComponent>;

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
        {provide: ItemService},
        {provide: ListaItem},
        {provide: NgbModal},
        {provide: HttpClient}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    component = TestBed.get(ItemService);
    fixture = TestBed.createComponent(TelaInicialComponent);
    component = fixture.componentInstance;
    fixture.debugElement.injector.get(ItemService);
    fixture.detectChanges();
  });

  it('Deve criar componente', () => {
    expect(component).toBeTruthy();
  });
});
