import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaAdvertenciaComponent } from '../lista-advertencia.component';

describe('ListaAdvertenciaComponent', () => {
  let component: ListaAdvertenciaComponent;
  let fixture: ComponentFixture<ListaAdvertenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAdvertenciaComponent ],
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(ListaAdvertenciaComponent);
      component = fixture.componentInstance;
    });
  }));

  it('Deve criar componente', () => {
    expect(component).toBeTruthy();
  });
});
