import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NotificationsService } from "angular2-notifications";
import { NgxSpinnerService } from "ngx-spinner";
import { GlobalService } from "src/services/global.service";

@Component({
  selector: "app-editar-destaque",
  templateUrl: "./editar-destaque.component.html",
  styleUrls: ["./editar-destaque.component.css"],
})
export class EditarDestaqueComponent implements OnInit {
  public form = new FormGroup({
    title: new FormControl("", Validators.required),
  });

  constructor(private service: GlobalService, private notify: NotificationsService,private spinner: NgxSpinnerService) {}

  public publicacao;

  ngOnInit() {
    this.getPubli();
  }

  getPubli(){
    this.service.get("posts/search/features/5").subscribe(
      (res) => {
        this.spinner.hide();
        console.log(res);
        this.publicacao = res;
      },
      (err) => {
        this.notify.error("Ocorreu um erro, por favor tente novamente.");
      }
    );
  }

  editarPost(e) {
    console.log(e);
    e.situation.featured = false;
    e.situation.position = 0;
    this.service.put("posts/"+e._id, e).subscribe(
      (res) => {
        this.spinner.hide();
        console.log(res);
        this.getPubli();
        this.notify.success('Retirado dos destaques com sucesso.', e.title);
      },
      (err) => {
        this.notify.error("Ocorreu um erro, por favor tente novamente.");
      }
    );

  }

  buscarPublicacao() {
    console.log(this.form.get("title").value);
  }
}
