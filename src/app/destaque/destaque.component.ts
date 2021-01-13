import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/services/global.service';
import { PostagensService } from 'src/services/postagens.service';

@Component({
  selector: 'app-destaque',
  templateUrl: './destaque.component.html',
  styleUrls: ['./destaque.component.css']
})
export class DestaqueComponent implements OnInit {

  public destaques;
public noticias;
public num;
public page;
  constructor(public service: GlobalService,private active: ActivatedRoute,public router: Router) { }

  ngOnInit(): void {

    this.active.params.subscribe((res) => {




     if(res.numero){
       this.page = parseInt(res.numero);
      this.service.get('posts/pages/number/post/').subscribe(resp => {
        this.num = resp;
        console.log(resp);
        this.callPost(res.numero);
      })
     }else{
      this.service.get('posts/pages/number/post/').subscribe(respp => {
        this.num = respp;
        console.log(respp);
        this.callPost(0);
      })

     }
    })



    this.service.get('posts/search/features/5').subscribe(res => {
      this.destaques = res;
      console.log(res);


    })


  }


  callNumber(e){
    this.router.navigateByUrl(
      "page/" + e
    );
  }


  callPost(page){
    this.service.getPagination('posts',page).subscribe(res =>{
      console.log(res);
       this.noticias = res;
      })

  }
}
