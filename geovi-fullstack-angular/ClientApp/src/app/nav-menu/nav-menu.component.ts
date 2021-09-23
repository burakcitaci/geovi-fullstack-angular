import { Component } from '@angular/core';
import { NavbarService } from 'src/assets/services/NavbarService';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  navBarService : NavbarService;
  constructor( nav: NavbarService ) {

    this.navBarService = nav;
    this.navBarService.show();
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
