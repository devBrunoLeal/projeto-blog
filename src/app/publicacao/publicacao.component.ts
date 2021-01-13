import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { GlobalService } from "src/services/global.service";
import { PostagensService } from "src/services/postagens.service";

@Component({
  selector: "app-publicacao",
  templateUrl: "./publicacao.component.html",
  styleUrls: ["./publicacao.component.css"],
})
export class PublicacaoComponent implements OnInit {
  activatedRoute: any;

  constructor(private active: ActivatedRoute, private service: GlobalService) {}

  public id;
  public publicacao;
  ngOnInit() {
    let id = this.active.snapshot.paramMap.get("id");

    console.log(id);

    this.active.params.subscribe(res => {
      console.log(res);
      this.service.get("posts/" +res.id).subscribe((res) => {
        console.log(res);
        this.publicacao = res;
      });
    })


  }
}
