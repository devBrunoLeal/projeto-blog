import { UploadFotoModule } from './../upload-foto/upload-foto.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarDestaqueComponent } from './editar-destaque/editar-destaque.component';
import { DeletarComponent } from './deletar/deletar.component';
import { CriarComponent } from './criar/criar.component';
import { PostagensComponent } from './postagens.component';
import { UploadFotoComponent } from '../upload-foto/upload-foto.component';
import { EditarComponent } from './editar/editar.component';
import { PipeePipe } from './pipee.pipe';
import { EditorModule } from '@tinymce/tinymce-angular';
import { SafePipe } from './safe.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';

@NgModule({
  declarations: [
    PostagensComponent,
    CriarComponent,
    EditarComponent,

    DeletarComponent,
    DeletarComponent,
    EditarDestaqueComponent,
    PipeePipe,
    SafePipe],
  imports: [
    CommonModule,
    EditorModule,
    CKEditorModule,
    ReactiveFormsModule,
    UploadFotoModule,
  ]
})
export class PostagensModule { }
