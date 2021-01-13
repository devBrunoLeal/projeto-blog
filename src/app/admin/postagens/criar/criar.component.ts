import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Component, OnInit, Pipe } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { CKEditor4 } from "ckeditor4-angular/ckeditor";
import { GlobalService } from "src/services/global.service";

@Component({
  selector: "app-criar",
  templateUrl: "./criar.component.html",
  styleUrls: ["./criar.component.css"],
})
export class CriarComponent implements OnInit {
  public data;
  public categorias;
  public form = new FormGroup({
    title: new FormControl("", Validators.required),
    content: new FormControl("", Validators.required),
    category: new FormControl("", Validators.required),
    user: new FormControl("", Validators.required),
    featured: new FormControl("", Validators.required),
    position: new FormControl("", Validators.required),
    featuredImgUrl: new FormControl("", Validators.required),
  });

  constructor(public service: GlobalService) {}

  ngOnInit() {
    this.service.get("categories").subscribe((res) => {
      this.categorias = res;
    });
  }

  public onChange(event: CKEditor4.EventInfo) {
    console.log(event.editor.getData());
    this.data = event.editor.getData();
  }

  select(value) {
    console.log(value);
  }


  enviarPost(){
    let user = localStorage.getItem('user')
      this.form.get('user').setValue(user);
     let post = this.form.value;
    console.log(post);
     post.content = this.data;

     let c = this.form.get('featured').value;
     let situation

     delete post.featured;
     delete post.position

     if(c == 'true'){
      situation = {
        featured: true,
        position: this.form.get('position').value,
      }
     }else{
      situation = {
        featured: false,
        position: '',
      }
     }
     post.situation = situation;


     this.service.post('posts', post).subscribe(res => {
       console.log(res);
     })
  }
}
