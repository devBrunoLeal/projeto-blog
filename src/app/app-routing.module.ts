import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/guards/auth.guard';
import { DestaqueComponent } from './destaque/destaque.component';
import { PublicacaoComponent } from './publicacao/publicacao.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { PesquisasComponent } from './pesquisas/pesquisas.component';
const routes: Routes = [
  {
    path: "",
    component: DestaqueComponent
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
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
