import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DestaqueComponent } from './destaque/destaque.component';
import { LatestComponent } from './latest/latest.component';
import { ScollprogressDirective } from './directives/scollprogress.directive';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostagensService } from 'src/services/postagens.service';
import { HttpClientModule } from '@angular/common/http';
import { PublicacaoComponent } from './publicacao/publicacao.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DestaqueComponent,
    LatestComponent,
    ScollprogressDirective,
    FooterComponent,
    AdminComponent,
    PublicacaoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [PostagensService],
  bootstrap: [AppComponent]
})
export class AppModule { }
