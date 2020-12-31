import { Component, OnInit } from '@angular/core';
import { PostagensService } from 'src/services/postagens.service';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit {


  public noticias

  constructor(private service: PostagensService) { }

  ngOnInit(): void {

    this.noticiasService(1);
    this.service.listPostagens().subscribe(res => {

    })
  }

  noticiasService(num) {
    this.service.getPost(num).subscribe(res => {
      console.log(res);
      this.noticias = res
      this.noticias = this.noticias.data
    })
  }

}
