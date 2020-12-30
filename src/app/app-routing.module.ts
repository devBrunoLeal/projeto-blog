import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DestaqueComponent } from './destaque/destaque.component';

const routes: Routes = [
  {
    path: "",
    component: DestaqueComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
