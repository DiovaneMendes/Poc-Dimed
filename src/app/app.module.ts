import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './modules/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RestModule } from './modules/rest.module';
import { NgModule } from '@angular/core';

import { ListaAdvertenciaComponent } from './componentes/lista-advertencia/lista-advertencia.component';
import { TabelaCategoriaComponent } from './componentes/tabela-categoria/tabela-categoria.component';
import { BarraNavegacaoComponent } from './componentes/barra-navegacao/barra-navegacao.component';
import { ModalDetalhesComponent } from './componentes/modal-detalhes/modal-detalhes.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';
import { InputEntradaComponent } from './componentes/input-entrada/input-entrada.component';
import { TelaInicialComponent } from './componentes/tela-inicial/tela-inicial.component';
import { ListaItensComponent } from './componentes/lista-itens/lista-itens.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaItensComponent,
    TelaInicialComponent,
    PageNotFoundComponent,
    InputEntradaComponent,
    ModalDetalhesComponent,
    BarraNavegacaoComponent,
    TabelaCategoriaComponent,
    ListaAdvertenciaComponent
  ],
  imports: [
    NgbModule,
    RestModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  entryComponents: [ModalDetalhesComponent],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
