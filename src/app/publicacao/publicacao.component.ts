import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostagensService } from 'src/services/postagens.service';

@Component({
  selector: 'app-publicacao',
  templateUrl: './publicacao.component.html',
  styleUrls: ['./publicacao.component.css']
})
export class PublicacaoComponent implements OnInit {

  constructor(private active: ActivatedRoute,
    private service: PostagensService) { }


    public publicacao;
  ngOnInit() {
      let id = this.active.snapshot.paramMap.get("id");

      console.log(id)

      this.service.umaPostagem(id).subscribe(res =>{
        console.log(res);
        this.publicacao = res;
      })
  }

}
