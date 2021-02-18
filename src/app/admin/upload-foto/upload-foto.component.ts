import { GlobalService } from 'src/services/global.service';
import { Component, OnInit } from '@angular/core';
import { FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry } from 'ngx-file-drop';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-upload-foto',
  templateUrl: './upload-foto.component.html',
  styleUrls: ['./upload-foto.component.css']
})
export class UploadFotoComponent implements OnInit {

  constructor(
    public service: GlobalService,
    private spinner: NgxSpinnerService,
    public notifications: NotificationsService) { }

  public files: NgxFileDropEntry[] = [];

  public filesLink = [];

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      this.spinner.show();

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          // Here you can access the real file

          const formData: FormData = new FormData();

          // console.log(droppedFile.fileEntry)
          formData.append('files',file,droppedFile.relativePath)

          this.service.uploadImagem(formData).subscribe(res => {
            // console.log(res);
            this.spinner.hide();
            this.notifications.success('Upload feito com sucesso!')
            this.filesLink.push({nome: droppedFile.relativePath, link: res.urlFoto})
            // console.log(this.filesLink)
          },(err) => {
            this.notifications.error('Erro ao fazer upload!')
          })

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        // console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event){
    // console.log(event);
  }

  public fileLeave(event){
    // console.log(event);
  }
  ngOnInit() {
  }

  onSelectFile(event){
    // console.log(event.target.files[0])
    const formData: FormData = new FormData();
    formData.append('files',event.target.files[0])

    this.service.uploadImagem(formData).subscribe(res => {
      // console.log(res);
    })

  }
}
