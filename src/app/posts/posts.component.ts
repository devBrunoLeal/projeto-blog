import { GlobalService } from 'src/services/global.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() noticias;
  @Input() num;
  @Output() pageSaida = new EventEmitter<number>();
  @Input()  p;
  public collection = [
  ]
  constructor(public post: GlobalService) { }

  ngOnInit() {
    console.log(this.num);
 for (let i = 1; i <= this.num; i++) {
      this.collection.push(`item ${i}`);
    }

  }


  pageChanged(event){
    this.pageSaida.emit(event-1);
  }
}
