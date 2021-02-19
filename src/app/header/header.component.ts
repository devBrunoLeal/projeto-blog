import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public show = true;
public showMenu = true;
public isAdmin = false;
  constructor(public route: Router) { }
  ngDoCheck() {
      if(location.href.includes('admin/postagens') || location.href.includes('admin/usuarios') || location.href.includes('admin/categorias'))
       this.isAdmin = true;
       else{
         this.isAdmin = false;
       }
  }
  ngOnInit(): void {

  }
  keyDownFunction(e){
    if (e.keyCode === 13) {
      // console.log(e.target.value);
      this.route.navigateByUrl('search/'+e.target.value);
      // console.log('enter')
    }
  }

  removerToken(){
    localStorage.removeItem('token-segueofluxo')
  }

  openBusca(){
   if(this.showMenu == true){
     this.showMenu = false;
   }else{
     this.showMenu = true;
   }
  }

}
