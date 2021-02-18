import { GlobalService } from './../services/global.service';
import { environment } from './../environments/environment.prod';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http"

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(public router: Router,
      public http: HttpClient,
           public service: GlobalService   ) {
    }

    canActivate(): boolean {
       let token = localStorage.getItem('token-segueofluxo');


       this.service.postVazio('users/canactive',{}).subscribe(res =>{
         if(res.canActive){
           // console.log('sucess');
         }else{
           localStorage.removeItem('token-segueofluxo');
           this.router.navigateByUrl('/login')
         }

       },(err) => {

       })

        if (!token) {
          alert('Sem autorização')
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
}
