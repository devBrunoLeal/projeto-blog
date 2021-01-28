import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/services/global.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {
  public noticias
  constructor(public service: GlobalService) { }

  ngOnInit() {
    this.service.getPagination("posts", 0).subscribe((res) => {
      console.log(res);
      this.noticias = res;
    });
  }


}
