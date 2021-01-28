import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/guards/auth.guard';
import { DestaqueComponent } from './destaque/destaque.component';
import { PublicacaoComponent } from './publicacao/publicacao.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { PesquisasComponent } from './pesquisas/pesquisas.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
const routes: Routes = [
  {
    path: "",
    component: DestaqueComponent
  },
  {
    path: "sobre",
    component: SobreComponent
  },
  {
    path: "contato",
    component: ContatoComponent
  },
  {
    path: "page/:numero",
    component: DestaqueComponent
  },
  {
    path: "publicacao/:id",
    component: PublicacaoComponent
  },
  {
    path: "search/:search",
    component: PesquisasComponent
  },
  {
    path: "search/:search/page/:numero",
    component: PesquisasComponent
  },
  {
    path: "categoria/:categoria",
    component: PesquisasComponent
  },
  {
    path: "categoria/:categoria/page/:numero",
    component: PesquisasComponent
  },
  {
    path: "usuario/:user",
    component: PesquisasComponent
  },
  {
    path: "usuario/:user/page/:numero",
    component: PesquisasComponent
  },
  { path: 'admin',
    loadChildren: '../app/admin/admin.module#AdminModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  CommonModule,
  HttpClientModule,
  BrowserAnimationsModule,
  ],
  exports: [RouterModule,BrowserAnimationsModule]
})
export class AppRoutingModule { }
