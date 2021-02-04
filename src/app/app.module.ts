import { SafePipeLink } from "./publicacao/safeLink.pipe";
import { SafePipe } from "./../app/publicacao/safe.pipe";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule,LOCALE_ID } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { DestaqueComponent } from "./destaque/destaque.component";
import { NgxPaginationModule } from "ngx-pagination";
import { LatestComponent } from "./latest/latest.component";
import { ScollprogressDirective } from "./directives/scollprogress.directive";
import { FooterComponent } from "./footer/footer.component";
import { ReactiveFormsModule } from "@angular/forms";
import { PostagensService } from "src/services/postagens.service";
import { HttpClientModule } from "@angular/common/http";
import { PublicacaoComponent } from "./publicacao/publicacao.component";
import { AdminModule } from "./admin/admin.module";
import { AuthGuard } from "src/guards/auth.guard";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  SimpleNotificationsModule,
  NotificationsService,
} from "angular2-notifications";
import { NgxSpinnerModule } from "ngx-spinner";
import { PostsComponent } from "./posts/posts.component";
import { PesquisasComponent } from "./pesquisas/pesquisas.component";
import { CarouselModule } from "ngx-owl-carousel-o";
import { IvyCarouselModule } from "angular-responsive-carousel";
import { RouterModule, Routes } from "@angular/router";
import { FacebookModule } from "ngx-facebook";
import { ComentariosComponent } from "./comentarios/comentarios.component";
import {
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatIconModule,
} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { SobreComponent } from "./sobre/sobre.component";
import { ContatoComponent } from "./contato/contato.component";
import {
  MatFormFieldModule,
  MatDatepickerModule,
  MatAutocompleteModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS,
  MatSnackBarModule,
  MatMenuModule,
} from "@angular/material";
import {
  MatMomentDateModule,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from "@angular/material-moment-adapter";
import localeExtraPT from '@angular/common/locales/extra/pt';
import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
registerLocaleData(localePT, 'pt', localeExtraPT);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DestaqueComponent,
    LatestComponent,
    ScollprogressDirective,
    FooterComponent,
    PublicacaoComponent,
    SafePipe,
    SafePipeLink,
    PostsComponent,
    PesquisasComponent,
    ComentariosComponent,
    SobreComponent,
    ContatoComponent,
  ],
  imports: [
    BrowserModule,
    FacebookModule.forRoot(),
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMomentDateModule,
    IvyCarouselModule,
    CarouselModule,
    NgxPaginationModule,
    AdminModule,
    RouterModule,
    NgxSpinnerModule,
    SimpleNotificationsModule.forRoot({
      timeOut: 3000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true,
    }),
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    PostagensService,
    AuthGuard,
    {
      provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS,
      useValue: { useUtc: true },
    },
    { provide: MAT_DATE_LOCALE, useValue: "pt-br" },
    { provide: LOCALE_ID, useValue: "pt-BR" },
    {
      provide: MAT_DATE_FORMATS,
      useValue: {
        parse: {
          dateInput: ["L"],
        },
        display: {
          dateInput: "DD/MM/YYYY",
        },
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
