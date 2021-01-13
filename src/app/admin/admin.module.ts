import { PostagensModule } from './postagens/postagens.module';
import { AuthGuard } from 'src/guards/auth.guard';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { PostagensComponent } from './postagens/postagens.component';
import { ROUTES } from './admin.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatIconModule} from '@angular/material/icon';
import { FileUploadModule } from 'ng2-file-upload';
import { NgxFileDropModule } from 'ngx-file-drop';
import { NgxSpinnerService } from 'ngx-spinner';
import { CriarComponent } from './postagens/criar/criar.component';
import { EditarComponent } from './postagens/editar/editar.component';
import { DeletarComponent } from './postagens/deletar/deletar.component';
import { EditarDestaqueComponent } from './postagens/editar-destaque/editar-destaque.component';

@NgModule({
  declarations: [LoginComponent,CategoriasComponent,UsuariosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    HttpClientModule,
    MatCardModule,
    PostagensModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  providers:[
    AuthGuard,
    NgxSpinnerService
  ]
})
export class AdminModule { }
