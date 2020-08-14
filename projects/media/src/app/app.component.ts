import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'media';
  isActive = false;
  makeSticky = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.scrollY > 0) {
      this.isActive = true;
    } else {
      this.isActive = false;
    }
    const sticky = document.getElementById('toolbar').offsetTop;
    if (window.scrollY > sticky) {
      this.makeSticky = true;
    } else {
      this.makeSticky = false;
    }

  }
}
