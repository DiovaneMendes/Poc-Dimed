import { InterceptorModule } from './modules/interceptor.module';
import { HttpClient, HttpHandler, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ItemService } from 'src/app/service/item.service';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacaoComponent } from './componentes/barra-navegacao/barra-navegacao.component';
import { TelaInicialComponent } from './componentes/tela-inicial/tela-inicial.component';
import { InputEntradaComponent } from './componentes/input-entrada/input-entrada.component';
import { ListaItensComponent } from './componentes/lista-itens/lista-itens.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacaoComponent,
    TelaInicialComponent,
    PageNotFoundComponent,
    InputEntradaComponent,
    ListaItensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InterceptorModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
