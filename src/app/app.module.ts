import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DestaqueComponent } from './destaque/destaque.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { LatestComponent } from './latest/latest.component';
import { ScollprogressDirective } from './directives/scollprogress.directive';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostagensService } from 'src/services/postagens.service';
import { HttpClientModule } from '@angular/common/http';
import { PublicacaoComponent } from './publicacao/publicacao.component';
import { AdminModule } from './admin/admin.module'
import { AuthGuard } from 'src/guards/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule, NotificationsService } from 'angular2-notifications';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PostsComponent } from './posts/posts.component';
import { PesquisasComponent } from './pesquisas/pesquisas.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DestaqueComponent,
    LatestComponent,

    ScollprogressDirective,
    FooterComponent,
    PublicacaoComponent,
    PostsComponent,
    PesquisasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    AdminModule,
    NgxSpinnerModule,
    SimpleNotificationsModule.forRoot({
      timeOut: 3000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true
    }),
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [PostagensService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
