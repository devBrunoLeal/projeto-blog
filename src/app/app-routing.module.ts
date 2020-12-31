import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DestaqueComponent } from './destaque/destaque.component';
import { PublicacaoComponent } from './publicacao/publicacao.component';

const routes: Routes = [
  {
    path: "",
    component: DestaqueComponent
  },
  {
    path: "admin",
    component: AdminComponent
  },
  {
    path: "publicacao/:id",
    component: PublicacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
