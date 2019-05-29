import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RestModule } from './modules/rest.module';
import { NgModule } from '@angular/core';

import { BarraNavegacaoComponent } from './componentes/barra-navegacao/barra-navegacao.component';
import { ModalDetalhesComponent } from './componentes/modal-detalhes/modal-detalhes.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';
import { InputEntradaComponent } from './componentes/input-entrada/input-entrada.component';
import { TelaInicialComponent } from './componentes/tela-inicial/tela-inicial.component';
import { ListaItensComponent } from './componentes/lista-itens/lista-itens.component';
import { AppComponent } from './app.component';
import { ListaAdvertenciaComponent } from './componentes/lista-advertencia/lista-advertencia.component';
import { TabelaCategoriaComponent } from './componentes/tabela-categoria/tabela-categoria.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacaoComponent,
    TelaInicialComponent,
    PageNotFoundComponent,
    InputEntradaComponent,
    ListaItensComponent,
    ModalDetalhesComponent,
    ListaAdvertenciaComponent,
    TabelaCategoriaComponent
  ],
  imports: [
    RestModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  entryComponents: [ModalDetalhesComponent],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
