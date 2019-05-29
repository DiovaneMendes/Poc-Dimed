import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAdvertenciaComponent } from './lista-advertencia.component';

describe('ListaAdvertenciaComponent', () => {
  let component: ListaAdvertenciaComponent;
  let fixture: ComponentFixture<ListaAdvertenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAdvertenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAdvertenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
