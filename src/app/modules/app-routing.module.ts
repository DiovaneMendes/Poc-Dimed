import { PageNotFoundComponent } from '../componentes/page-not-found/page-not-found.component';
import { TelaInicialComponent } from '../componentes/tela-inicial/tela-inicial.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'inicio', component: TelaInicialComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
