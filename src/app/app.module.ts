import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RestModule } from './modules/rest.module';

import { BarraNavegacaoComponent } from './componentes/barra-navegacao/barra-navegacao.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';
import { InputEntradaComponent } from './componentes/input-entrada/input-entrada.component';
import { MaisDetalhesComponent } from './componentes/mais-detalhes/mais-detalhes.component';
import { TelaInicialComponent } from './componentes/tela-inicial/tela-inicial.component';
import { ListaItensComponent } from './componentes/lista-itens/lista-itens.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacaoComponent,
    TelaInicialComponent,
    PageNotFoundComponent,
    InputEntradaComponent,
    ListaItensComponent,
    MaisDetalhesComponent
  ],
  imports: [
    RestModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
