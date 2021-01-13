import { rendererTypeName } from "@angular/compiler";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GlobalService } from "src/services/global.service";

@Component({
  selector: "app-pesquisas",
  templateUrl: "./pesquisas.component.html",
  styleUrls: ["./pesquisas.component.css"],
})
export class PesquisasComponent implements OnInit {
  public resultado;
  public titulo;
  public tipo;
  public num;
  public pagina;
  constructor(
    private active: ActivatedRoute,
    public service: GlobalService,
    public router: Router
  ) {}

  ngOnInit() {
    this.active.params.subscribe((res) => {
      console.log(res);
      if (res.categoria) {
        this.tipo = "categoria";
        this.titulo = res.categoria;
        this.pagina = res.numero;
        this.service
          .get("posts/pages/number/category/" + res.categoria)
          .subscribe((res) => {
            this.num = res;
            console.log(this.num);
            this.callCategoria(this.titulo, this.pagina);
          });
      }
      if (res.user) {
        this.tipo = "usuario";
        this.titulo = res.user;
        this.pagina = res.numero;
        this.service
          .get("posts/pages/number/user/" + res.user)
          .subscribe((res) => {
            this.num = res;
            console.log(this.num);
            this.callUser(this.titulo, this.pagina);
          });
      }
      if (res.search) {
        this.tipo = "search";
        this.titulo = res.search;
        this.pagina = res.numero;
        this.service
          .get("posts/pages/number/search/" + res.search)
          .subscribe((res) => {
            this.num = res;
            console.log(this.num);
            this.callSearch(this.titulo, this.pagina);
          });
      }
      this.pagina = parseInt(this.pagina);
    });
  }

  callCategoria(text, page) {
    this.service
      .getPagination("posts/category/" + text, page)
      .subscribe((res) => {
        this.resultado = res;
        console.log(res);
      });
  }

  callUser(text, page) {
    this.service.getPagination("posts/user/" + text, page).subscribe((res) => {
      this.resultado = res;
      console.log(res);
    });
  }

  callSearch(text, page) {
    this.service
      .getPagination("posts/search/" + text, page)
      .subscribe((res) => {
        this.resultado = res;
        console.log(res);
      });
  }

  paginate(e) {
    this.router.navigateByUrl(
      this.tipo + "/" + this.titulo + "/" + "page/" + e
    );
  }
}
