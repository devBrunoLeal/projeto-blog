import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/services/global.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  public noticias
  constructor(public service: GlobalService) { }

  ngOnInit() {
    this.service.getPagination("posts", 0).subscribe((res) => {
      console.log(res);
      this.noticias = res;
    });
  }


}
