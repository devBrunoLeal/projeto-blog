import { GlobalService } from 'src/services/global.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotificationsService } from 'angular2-notifications';



@Component({
  selector: 'app-postagens',
  templateUrl: './postagens.component.html',
  styleUrls: ['./postagens.component.css']
})
export class PostagensComponent implements OnInit {

public criar: boolean = true;
public editar: boolean = false;
public destaque: boolean = false;
public deletar: boolean = false;


  constructor(
    public service: GlobalService,
    private spinner: NgxSpinnerService,
    public notifications: NotificationsService) { }


  ngOnInit() {
  }

  show(text){
    if(text == 'criar'){
      this.criar = true;
      this.deletar = false;
      this.editar = false;
      this.destaque = false;
    }
    if(text == 'editar'){
      this.criar = false;
      this.deletar = false;
      this.editar = true;
      this.destaque = false;
    }
    if(text == 'destaque'){
      this.criar = false;
      this.deletar = false;
      this.editar = false;
      this.destaque = true;
    }
    if(text == 'deletar'){
      this.criar = false;
      this.deletar = true;
      this.editar = false;
      this.destaque = false;
    }
  }

}
