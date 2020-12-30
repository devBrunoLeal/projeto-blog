import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DestaqueComponent } from './destaque/destaque.component';
import { LatestComponent } from './latest/latest.component';
import { ScollprogressDirective } from './directives/scollprogress.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DestaqueComponent,
    LatestComponent,
    ScollprogressDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
