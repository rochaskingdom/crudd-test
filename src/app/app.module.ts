import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarGestorComponent } from './criar-gestor/criar-gestor.component';
import { GestorDetalhesComponent } from './gestor-detalhes/gestor-detalhes.component';
import { GestorListarComponent } from './gestor-listar/gestor-listar.component';
import { AtualizarGestorComponent } from './atualizar-gestor/atualizar-gestor.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CriarGestorComponent,
    GestorDetalhesComponent,
    GestorListarComponent,
    AtualizarGestorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
