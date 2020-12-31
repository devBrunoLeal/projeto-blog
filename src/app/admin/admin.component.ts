import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostagensService } from 'src/services/postagens.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service: PostagensService) { }

  public form = new FormGroup({
   genero: new FormControl(''),
   titulo: new FormControl(''),
   texto: new FormControl(''),
   data: new FormControl(new Date()),
  })
  
  
  ngOnInit() {
  }


  enviarForm(){

   this.service.publicarPostagem(this.form.value).subscribe(res => {
     console.log(res);
   })
  }
}
