import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http"
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})





export class PostagensService  {
    constructor(public http: HttpClient){}



   public api = "http://segueofluxo-com.umbler.net/"
   public apii = "https://dummyapi.io/data/api/"
   public headers: HttpHeaders = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Accept', 'application/json')
      .append('app-id', '5fed45f2edd37c742e9ae515')



   public getPost(pagina){
     const header = this.headers
       return this.http.get(this.apii+"post?page="+pagina+"&limit=10", {headers: header})
   }

   public getDez(){
     let pagina = 4;
    const header = this.headers
      return this.http.get(this.apii+"post?page=4&limit=3", {headers: header})
  }

    public listPostagens(){
        return this.http.get(this.api+"projects")
    }

    public publicarPostagem(send){
        return this.http.post(this.api+"projects", send)
    }

    public umaPostagem(id){
        return this.http.get(this.api+"projects/publicacao/"+id)
    }

    public atualizarPostagem(id, send){
        return this.http.put(this.api+"projects/"+id, send)
    }

    public deletarPostagem(id){
        return this.http.delete(this.api+"projects/"+id)
    }
}
