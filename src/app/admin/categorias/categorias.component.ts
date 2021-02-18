import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { NgxSpinnerService } from 'ngx-spinner';
import { GlobalService } from 'src/services/global.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
 public categorias;
 public editarName;
public description;
  constructor(private service: GlobalService, private notify: NotificationsService,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.getCategorias();
  }

  getCategorias(){
    this.service.get("categories/").subscribe(
      (res) => {
        this.spinner.hide();
        // console.log(res);
        this.categorias = res;
      },
      (err) => {
        this.notify.error("Ocorreu um erro, por favor tente novamente.");
      }
    );
  }


  deletar(e){
    // console.log(e)
    this.service.delete("categories/"+e).subscribe(
      (res) => {
        this.spinner.hide();
        // console.log(res);
        this.notify.success('Deletado com sucesso', "Categoria deletada:"+res[0].description);
        this.getCategorias()
      },
      (err) => {
        this.notify.error("Ocorreu um erro, por favor tente novamente.");
      }
    );
  }

  editar(e){
    this.editarName = e;
  }

  enviarEditar(e){
    e.description = this.editarName;
    this.service.put("categories/"+e._id, e).subscribe(
      (res) => {
        this.spinner.hide();
        // console.log(res);
        this.notify.success('Editado com sucesso', "Categoria editada:"+res.description);
        this.getCategorias()
      },
      (err) => {
        this.notify.error("Ocorreu um erro, por favor tente novamente.");
      }
    );
  }

  criar(e){
    this.description = e;
  }

  enviarCriar(){
    let aux = {description: this.description}
    this.service.post("categories/", aux).subscribe(
      (res) => {
        this.spinner.hide();
        // console.log(res);
        this.notify.success('Criado com sucesso', "Categoria criada:"+res.description);
        this.getCategorias()
      },
      (err) => {
        this.notify.error("Ocorreu um erro, por favor tente novamente.");
      }
    );
  }

}
