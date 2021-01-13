import { Component, Input, OnInit } from '@angular/core';
import { GlobalService } from 'src/services/global.service';
import { PostagensService } from 'src/services/postagens.service';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit {

  @Input() show;
  @Input() titulo;
  public noticias;
  public alta_destaque;
  public alta = [];

  constructor(private service: PostagensService, public post: GlobalService) { }

  ngOnInit() {


  this.post.get('posts/search/em-alta/10').subscribe(res =>{
    console.log(res);
     this.alta = res;
    })



  }



}
