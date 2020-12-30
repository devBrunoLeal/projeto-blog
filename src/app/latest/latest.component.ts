import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit {


  public noticias = [
    {
      urlFoto: "",
      categoria: "Funk",
      titulo: "Lil Nas X responde piadas sobre ser “cantor de apenas 1 hit”",
    },
    {
      urlFoto: "",
      categoria: "Rap",
      titulo: "Diddy diz que PARTYNEXTDOOR é o melhor compositor em atividade”",
    },
    {
      urlFoto: "",
      categoria: "Funk",
      titulo: "Lil Nas X responde piadas sobre ser “cantor de apenas 1 hit”",
    },
    {
      urlFoto: "",
      categoria: "Funk",
      titulo: "Lil Nas X responde piadas sobre ser “cantor de apenas 1 hit”",
    },
    {
      urlFoto: "",
      categoria: "Igor",
      titulo: "IGOR”",
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
