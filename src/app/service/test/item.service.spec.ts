import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ItemService } from '../item.service';

describe('ItemService', () => {
  beforeEach(() => 
    TestBed.configureTestingModule({
      providers: [
        {provide: HttpClient}
      ]
    })
  );

  it('Deve criar service', () => {
    const service: ItemService = TestBed.get(ItemService);
    expect(service).toBeTruthy();
  });
});
