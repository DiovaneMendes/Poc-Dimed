import { ItemService } from 'src/app/service/item-service/item.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TokenService } from '../token.service';


describe('TokenService', () => {
  let itemService: ItemService;
  let tokenService: TokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ItemService,
        {provide: 
          HTTP_INTERCEPTORS,
          useClass: TokenService,
          multi: true,
        },
      ]
    });
    itemService = TestBed.get(ItemService);
    tokenService = TestBed.get(TokenService);
  });

  it('Deve criar service', () => {
    expect(tokenService).toBeTruthy();
  });

  it('Deve gerar autorização para requisição', () => {
    itemService.buscaBases('tors').subscribe(res => {
      expect(res).toBeTruthy();
    })
  });
});
