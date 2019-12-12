import { GestorDetalhesComponent } from './gestor-detalhes/gestor-detalhes.component';
import { CriarGestorComponent } from './criar-gestor/criar-gestor.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestorListarComponent } from './gestor-listar/gestor-listar.component';
import { AtualizarGestorComponent } from './atualizar-gestor/atualizar-gestor.component';

const routes: Routes = [
  { path: '', redirectTo: 'gestor', pathMatch: 'full' },
  { path: 'gestores', component: GestorListarComponent },
  { path: 'adicionar', component: CriarGestorComponent },
  { path: 'atualizar/:id', component: AtualizarGestorComponent },
  { path: 'detalhes/:id', component: GestorDetalhesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }