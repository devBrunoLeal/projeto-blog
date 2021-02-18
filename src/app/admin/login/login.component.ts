import { FormGroup, FormControl } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { GlobalService } from "src/services/global.service";
import { Router } from "@angular/router";
import { NotificationsService } from "angular2-notifications";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  hide = true;
  click = 0;

  constructor(
    public service: GlobalService,
    public router: Router,
    private noti: NotificationsService,
    private spinner: NgxSpinnerService
  ) {}
  public form = new FormGroup({
    email: new FormControl(""),
    password: new FormControl(""),
  });

  ngOnInit() {}

  enviarLogin() {
    this.click++;

    if (this.click == 1) {
      this.spinner.show();
      // console.log(this.form.value);
      this.service.post("users/login", this.form.value).subscribe(
        (res) => {

          this.noti.success("Sucesso", "Login feito com sucesso.", {
            timeOut: 3000,
            showProgressBar: true,
          });


          // console.log(res);
          localStorage.setItem("token-segueofluxo", res.token);
          localStorage.setItem("user", res.idUser);


            this.spinner.hide();
            this.router.navigateByUrl("/admin/postagens");
            setTimeout(function(){location.reload()},500)
        },
        (err) => {
          // console.log(err);
          this.click = 0;
          this.spinner.hide();
          this.noti.error(
            "Error",
            "Falha ao fazer login, verifique os campos",
            {
              timeOut: 3000,
              showProgressBar: true,
            }
          );
        }
      );
    }
  }
}
