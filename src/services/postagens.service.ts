import { HttpClient, HttpParams } from "@angular/common/http"
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class PostagensService  {
    constructor(public http: HttpClient){}

   public api = "http://192.168.0.104:3333/"


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