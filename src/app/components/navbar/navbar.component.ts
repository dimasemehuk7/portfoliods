import {Component} from "@angular/core";

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['menu.scss', 'navbar.component.scss']
})

export class NavbarComponent {
  isNavListVisible: boolean = false;

  toggleNavList() {
    this.isNavListVisible = !this.isNavListVisible;
  }

}
