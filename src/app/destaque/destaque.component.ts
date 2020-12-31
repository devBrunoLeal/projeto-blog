import { Component, OnInit } from '@angular/core';
import { PostagensService } from 'src/services/postagens.service';

@Component({
  selector: 'app-destaque',
  templateUrl: './destaque.component.html',
  styleUrls: ['./destaque.component.css']
})
export class DestaqueComponent implements OnInit {

  public destaques;

  constructor(public service: PostagensService) { }

  ngOnInit(): void {
     this.service.getDez().subscribe(res =>{
       this.destaques = res;
       this.destaques = this.destaques.data;
       console.log(this.destaques)
     })

  }

}
