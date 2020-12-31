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
    this.service.listPostagens().subscribe(res => {
      this.noticias = res;
    })
  }

}
