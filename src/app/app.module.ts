import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacaoComponent } from './componentes/barra-navegacao/barra-navegacao.component';
import { TelaInicialComponent } from './componentes/tela-inicial/tela-inicial.component';
import { InputEntradaComponent } from './componentes/input-entrada/input-entrada.component';
import { InformacoesComponent } from './componentes/informacoes/informacoes.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacaoComponent,
    TelaInicialComponent,
    PageNotFoundComponent,
    InputEntradaComponent,
    InformacoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
