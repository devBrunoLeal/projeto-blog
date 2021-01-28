import { NotificationsService } from 'angular2-notifications';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from 'src/services/global.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class DeletarComponent implements OnInit {
  public form = new FormGroup({
    title: new FormControl("", Validators.required),
  });
 public publicacao;
  constructor(private service: GlobalService,private notify: NotificationsService,private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }
  deletarPost(id){
    this.spinner.show();
    this.service.delete("posts/" + id).subscribe((res) => {
      this.spinner.hide();
      console.log(res);
      this.notify.success('Deletado com sucesso!',res[0].title)
      this.buscarPublicacao();
    },(err) => {
      this.notify.error('Ocorreu um erro, por favor tente novamente.')
     });
  }

  buscarPublicacao(){
    this.spinner.show();
    console.log(this.form.get('title').value)
    this.service.get("posts/search/" + this.form.get('title').value).subscribe((res) => {
      this.spinner.hide();
      console.log(res);
      this.publicacao = res;
      if(res.length > 0){

      }else{
        this.notify.error('Nada foi encontrado!')
      }
    },(err) => {
     this.notify.error('Ocorreu um erro, por favor tente novamente.')
    });
  }
}
