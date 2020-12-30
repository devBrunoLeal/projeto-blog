import {Directive, HostListener} from '@angular/core';
@Directive({
  selector: '[appScollprogress]'
})
export class ScollprogressDirective {
  constructor(
  ) {}
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    const winScroll = event.target.documentElement.scrollTop || event.currentTarget.scrollTop || document.body.scrollTop;
    const height = (event.target.documentElement.scrollHeight || event.currentTarget.scrollHeight ) -
      (event.target.documentElement.clientHeight || event.currentTarget.clientHeight);
    const scrolled = (winScroll / height) * 100;
    document.getElementById('scrollBar').style.width = scrolled + '%';
  }
}
