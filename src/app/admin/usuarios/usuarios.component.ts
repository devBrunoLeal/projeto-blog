import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NotificationsService } from "angular2-notifications";
import { NgxSpinnerService } from "ngx-spinner";
import { GlobalService } from "src/services/global.service";

@Component({
  selector: "app-usuarios",
  templateUrl: "./usuarios.component.html",
  styleUrls: ["./usuarios.component.css"],
})
export class UsuariosComponent implements OnInit {
  public form = new FormGroup({
    name: new FormControl("", Validators.required),
    about: new FormControl("", Validators.required),
    imgUrl: new FormControl("", Validators.required),
    facebook: new FormControl("", Validators.required),
    instagram: new FormControl("", Validators.required),
    twitter: new FormControl("", Validators.required),
    username: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    createdAt: new FormControl("", Validators.required),
  });

  constructor(
    private service: GlobalService,
    private notify: NotificationsService,
    private spinner: NgxSpinnerService
  ) {}
  public users;
  public userEdit;
  public option = 'password';
  public editar = false;
  ngOnInit() {
    this.getUsers();
    this.service.get("users/").subscribe(
      (res) => {
        this.spinner.hide();
        // console.log(res);
        this.users = res;
       // console.log(this.users)
      },
      (err) => {
        this.notify.error("Ocorreu um erro, por favor tente novamente.");
      }
    );
  }

  show(){
   if(this.option == 'password'){
    this.option = 'text';
   }else{
     this.option = 'password'
   }


  }

  getUsers() {
    // console.log("teste");
    this.service.get("users/").subscribe(
      (res) => {
        this.spinner.hide();
        this.users = res;
      },
      (err) => {
        this.notify.error("Ocorreu um erro, por favor tente novamente.");
      }
    );
  }

  editarSend(){
    this.service.put("users/"+this.userEdit,this.form.value).subscribe(
      (res) => {
        this.spinner.hide();
        this.notify.success('Usuario criado com sucesso');
        this.getUsers();
      },
      (err) => {
        this.notify.error("Ocorreu um erro, por favor tente novamente.");
      }
    );
  }

  cancel(){
    this.editar = false;
    this.form.reset();
  }
  criarUser(){
    this.service.post("users/",this.form.value).subscribe(
      (res) => {
        this.spinner.hide();
        this.notify.success('Usuario criado com sucesso');
        this.getUsers();
      },
      (err) => {
        this.notify.error("Ocorreu um erro, por favor tente novamente.");
      }
    );
  }

  editarUser(e) {
    this.userEdit = e._id
    // console.log(e);
    this.editar=true;
    this.form.patchValue(e);
  }

  deletarUser(e) {
    // console.log(e);
  }
}
