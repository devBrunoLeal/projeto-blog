import { createUrlResolverWithoutPackagePrefix } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GlobalService } from "src/services/global.service";
import { PostagensService } from "src/services/postagens.service";
import { OwlOptions } from "ngx-owl-carousel-o";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-destaque",
  templateUrl: "./destaque.component.html",
  styleUrls: ["./destaque.component.css"],
})
export class DestaqueComponent implements OnInit {
  public destaques = [];
  public destaquesCarousel = [];
  public noticias;
  public num;
  public page;
  constructor(
    public service: GlobalService,
    private active: ActivatedRoute,
    public router: Router,
    public title: Title
  ) {}

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

  ngOnInit(): void {
    this.title.setTitle("Segue o fluxo - O melhor do funk")
    this.customOptions = {
      loop: false,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      navText: ["", ""],
      responsive: {
        0: {
          items: 3,
        },
        400: {
          items: 7,
        },
        740: {
          items: 4,
        },
        940: {
          items: 5,
        },
      },
      nav: true,
    };

    this.active.params.subscribe((res) => {


      if (res.numero) {
        this.page = parseInt(res.numero);
        this.service.get("posts/pages/number/post/").subscribe((resp) => {
          this.num = resp;
          console.log(resp);
          this.callPost(res.numero);
        });
      } else {
        this.service.get("posts/pages/number/post/").subscribe((respp) => {
          this.num = respp;
          console.log(respp);
          this.callPost(0);
        });
      }
    });

    this.service.get("posts/search/features/5").subscribe((res) => {
      this.destaques = res;
      console.log(res);
      this.montaDestaque();
    });



  }

  montaDestaque(){
   for (let i = 0; i < this.destaques.length; i++) {
     if(i > 1){
       this.destaquesCarousel.push(this.destaques[i]);

     }

   }
   console.log(this.destaquesCarousel);
  }

  callNumber(e) {
    this.router.navigateByUrl("page/" + e);
  }

  callPost(page) {
    this.service.getPagination("posts", page).subscribe((res) => {
      console.log(res);
      this.noticias = res;
    });
  }
}
