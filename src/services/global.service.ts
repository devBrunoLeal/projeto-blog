import { HttpClient, HttpHeaders, HttpParams, } from "@angular/common/http"
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})





export class GlobalService  {
    constructor(public http: HttpClient){}



   public api = "https://segueofluxo-com.umbler.net/"
   public apii = "https://dummyapi.io/data/api/"
   public token = localStorage.getItem('token-segueofluxo');
   public token_id = localStorage.getItem('user')


   public headers: HttpHeaders = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Accept', 'application/json')
      .set('Cache-Control', 'no-cache')
      .append('x-access-token', this.token)
      .append('user-id', this.token_id)


      public headers2: HttpHeaders = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Accept', 'application/json')
      .set('Cache-Control', 'no-cache')



      public headersImg: HttpHeaders = new HttpHeaders()
      .set('content-type', 'multipart/form-data')
      .append('x-access-token', this.token)
      .append('Accept', '*/*')




   public get(endereco){

    let header;
    if(this.token){
      header = this.headers
    }else{
      header = this.headers2
    }


          return this.http.get<any>(this.api+endereco, {headers: header})
  }

   public getPagination(endereco,pagina){

    let header;
    if(this.token){
      header = this.headers
    }else{
      header = this.headers2
    }

       return this.http.get<any>(this.api+endereco+"?page="+pagina+"&limit=10", {headers: header})
   }

   public post(endereco,send){
    const header = this.headers
      return this.http.post<any>(this.api+endereco,send, {headers: header})
  }

  public uploadImagem(file) {


   // console.log(file)
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'x-access-token': this.token
      })
    };

    const header = this.headersImg
      return this.http.post<any>(this.api+"posts/upload",file, httpOptions)
  }

  public postVazio(endereco,send){
    const header = this.headers
      return this.http.post<any>(this.api+endereco,{}, {headers: header})
  }

  public put(endereco,send){
    const header = this.headers
      return this.http.put<any>(this.api+endereco,send, {headers: header})
  }

  public delete(endereco){
    const header = this.headers
      return this.http.delete<any>(this.api+endereco, {headers: header})
  }

}
