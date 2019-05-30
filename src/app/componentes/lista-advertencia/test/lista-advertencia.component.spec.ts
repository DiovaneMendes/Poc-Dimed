import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaAdvertenciaComponent } from '../lista-advertencia.component';
import { ListaAdvertenciaStub as stub } from './lista-advertencia.stub';

describe('ListaAdvertenciaComponent', () => {
  let component: ListaAdvertenciaComponent;
  let fixture: ComponentFixture<ListaAdvertenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAdvertenciaComponent ],
      providers: [
        {provide: ListaAdvertenciaComponent, useClass: stub}
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(ListaAdvertenciaComponent);
      component = fixture.componentInstance;
      component.listaAdvertencias = stub.getLista();
    });
  }));

  it('Deve criar componente', () => {
    expect(component).toBeTruthy();
  });
});
