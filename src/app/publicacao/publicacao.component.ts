import { Component, ElementRef, OnInit } from "@angular/core";
import { Meta, SafeResourceUrl, Title } from "@angular/platform-browser";
import { ActivatedRoute, Params } from "@angular/router";
import { GlobalService } from "src/services/global.service";
import { PostagensService } from "src/services/postagens.service";
import { DomSanitizer } from "@angular/platform-browser";
import { MetaService } from "ng2-meta";
@Component({
  selector: "app-publicacao",
  templateUrl: "./publicacao.component.html",
  styleUrls: ["./publicacao.component.css"],
})
export class PublicacaoComponent implements OnInit {
  activatedRoute: any;
  public url;
  constructor(
    private active: ActivatedRoute,
    private service: GlobalService,
    public titleService: Title,
    private elRef: ElementRef,
    private sanitizer: DomSanitizer,
    private meta: Meta,
    private metaService: MetaService
  ) {}
  public link = "https://zyra.github.io/ngx-facebook/comments/";
  public id;
  public valuee;
  public urlAtual;
  public publicacao;
  public user;
  public scriptLoaded = false;
  public linkAtual;
  ngDoCheck() {}

  ngOnInit() {
   this.linkAtual = location.href;

    let value;
    window.addEventListener("scroll", function () {
      let doc = window.document.documentElement;
      value = (100 * doc.scrollTop) / (doc.scrollHeight - doc.clientHeight);
      let facebook = window.document.body.querySelector(".fb-comments");
    });
    this.valuee = value;
    // console.log(this.valuee);
    let id = this.active.snapshot.paramMap.get("id");
    // console.log(id);

    this.active.params.subscribe((res) => {
      // console.log(res);
      this.service.get("posts/" + res.id).subscribe((res) => {
        // console.log(res);
        this.linkAtual = location.href;
        this.publicacao = res;
        this.metaService.setTitle('Product page for '+res.title);
        this.metaService.setTag('og:image',res.featuredImgUrl);
        this.metaService.setTag('og:image:secure_url',res.featuredImgUrl)
        this.metaService.setTag('og:title',res.title);
        this.metaService.setTag('og:description',res.subTitle);

        this.titleService.setTitle(res.title);
        this.getUser(res.user);
        this.loadScript();

      });
    });
  }
  cleanURL(oldURL: string): SafeResourceUrl {
    // console.log(oldURL);
    return "FSA";
  }

  loadScript() {
    setTimeout(() => {
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(
        "https://www.facebook.com/v9.0/plugins/comments.php?app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1fcb71c752e274%26domain%3Dlocffalhost%26origin%3Dhttp%253A%252F%252Flocalhfffost%253A4200%252Ff23b581561219e4%26relation%3Dparent.parent&amp;container_width=967&amp;height=50&amp;href=http://localhost:4202/publicacao/%2F&amp;locale=pt_BR&amp;numposts=3&amp;sdk=joey&amp;version=v9.0&amp;width=550"
      );
      // console.log(this.url);
      document.getElementById("frame_idd").innerHTML =
        '<iframe name="f34b0dcef3b8178" class="iframe-facebook"  data-testid="fb:comments Facebook Social Plugin" title="fb:comments Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true"  *ngIf="publicacao" id="frame_id" allow="encrypted-media" src="https://www.facebook.com/v9.0/plugins/comments.php?app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1fcb71c752e274%26domain%3Dlocffalhost%26origin%3Dhttp%253A%252F%252Flocalhfffost%253A4200%252Ff23b581561219e4%26relation%3Dparent.parent&amp;container_width=967&amp;height=50&amp;href=http://localhost:4202/publicacao/' +
        this.publicacao.idTitle +
        '%2F&amp;locale=pt_BR&amp;numposts=3&amp;sdk=joey&amp;version=v9.0&amp;width=100%" style="border: none; visibility: visible; width: 100%; height: 550px; display:block;" class=""></iframe>';
      // console.log("teste");
    }, 1000);
    // console.log("preparing to load...");
    let node = document.createElement("script");
    node.src = this.url;
    node.async = true;
    // console.log(node);
    document.querySelector("body").append(node);

    // console.log("preparing to load...");
    let face = document.createElement("script");
    face.src = "https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v9.0";
    face.async = true;
    face.defer = true;
    face.crossOrigin = "anonymous";
    face.nonce = "IrsBZw6Y";
    // console.log(node);
    document.querySelector("body").append(face);
    this.scriptLoaded = true;
    setTimeout(() => {}, 500);

    this.titleService.setTitle(this.publicacao.title);
  }


  verificarFrame(){
    setInterval(() => {
      const isIFrame = (
        input: HTMLElement | null
      ): input is HTMLIFrameElement =>
        input !== null && input.tagName === "iframe";

      let facebookIframe = document.getElementById("frame_id") as HTMLIFrameElement ;

      let documentFrame = facebookIframe.contentWindow.document.querySelector('_2pi8');
      if(documentFrame){
        // console.log(documentFrame);
      }

      // console.log(documentFrame);

      if (isIFrame(facebookIframe) && facebookIframe.contentWindow) {
       let face = facebookIframe.contentWindow.document;
       // console.log(face);
      }

    }, 500);
  }

  criarComentario() {
    let face = document.createElement("iframe");
    face.src =
      "https://www.facebook.com/v9.0/plugins/comments.php?app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1700a1d0e750f8%26domain%3Dlocalhost%26origin%3Dhttp%253A%252F%252Flocalhost%253A4200%252Ff3619302818ca24%26relation%3Dparent.parent&amp;container_width=967&amp;height=100&amp;href=http%3A%2F%2Fgoogle.com.br%2F&amp;locale=pt_BR&amp;numposts=5&amp;sdk=joey&amp;version=v9.0&amp;width=550";
    face.id = "frame-facebook";
    face.name = "f28ce47296153";
    face.width = "550px";
    face.height = "100px";
    face.title = "fb:comments Facebook Social Plugin";
    face.allowFullscreen = true;
    face.allow = "encrypted-media";
    face.nonce = "IrsBZw6Y";
    // console.log(face);
    document.querySelector("body").append(face);
  }

  getUser(user) {
    this.service.get("users/about/" + user).subscribe((res) => {
      // console.log(res);
      this.user = res;
    });
  }
}
