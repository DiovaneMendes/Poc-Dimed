import { ItemServiceStub as stub } from './item.service.stub';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ItemService } from '../item.service';
import { of } from 'rxjs';

describe('ItemService', () => {
  let service: ItemService;
  let httpClient: HttpClient;

  beforeEach(() => { 
    TestBed.configureTestingModule({
      providers: [
        ItemService,
        {provide: HttpClient, useClass: stub}
      ]
    });
    service = TestBed.get(ItemService);
    httpClient = TestBed.get(HttpClient);    
  });

  it('Deve criar service', () => {
    expect(service).toBeTruthy();
  });

  describe('Dado que o metodo [buscaBases] seja chamado...', () => {
    beforeEach(() => {
      spyOn(httpClient, 'get').and.callFake(() => {});
      service.buscaBases('tors');
    });

    it('Deve retornar primeiros detalhes de um item', () => {
      expect(httpClient.get).toHaveBeenCalled();
    });
  });

  describe('Dado que o metodo [buscaDetalhe] seja chamado...', () => {
    beforeEach(() => {
      spyOn(httpClient, 'post').and.callFake(() => {});
      service.buscaDetalhe(160660);
    });

    it('Deve retornar detalhes de um item', () => {
      expect(httpClient.post).toHaveBeenCalled();
    });
  });

  describe('Dado que o metodo [buscaEstoque] seja chamado...', () => {
    beforeEach(() => {
      spyOn(httpClient, 'get').and.callFake(() => {});
      service.buscaEstoque(160660);
    });

    it('Deve retornar estoque de um item', () => {
      expect(httpClient.get).toHaveBeenCalled();
    });
  });

  describe('Dado que o metodo [requestDetalheEstoque] seja chamado...', () => {
    let resultado;

    beforeEach(() => {
      spyOn(service, 'buscaDetalhe').and.returnValue( of(stub.getItem()) );
      spyOn(service, 'buscaEstoque').and.returnValue( of(stub.getEstoque()) );
      service.requestDetalheEstoque(840990).subscribe( res => resultado = res);
    });

    it('Deve retornar lista com detalhe e estoque', () => {
      expect(resultado).toEqual( stub.getFork() );
    });
  });
});