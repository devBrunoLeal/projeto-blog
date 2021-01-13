import { UploadFotoComponent } from './upload-foto.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { NgxSpinnerService } from 'ngx-spinner';
import { FileUploadModule } from 'ng2-file-upload';
import { NgxFileDropModule } from 'ngx-file-drop';



@NgModule({
  declarations: [UploadFotoComponent],
  imports: [
    CommonModule,
    FileUploadModule,
    NgxFileDropModule,
  ],
  providers:[
    AuthGuard,
    NgxSpinnerService
  ],
  exports: [
    UploadFotoComponent
      ]
})
export class UploadFotoModule { }
