import { BarraNavegacaoComponent } from './../../barra-navegacao/barra-navegacao.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from '../page-not-found.component';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFoundComponent, BarraNavegacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar componente', () => {
    expect(component).toBeTruthy();
  });
});
