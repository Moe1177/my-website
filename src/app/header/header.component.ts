import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  menuValue: boolean = true;
  menuIcon: string = 'fa-solid fa-bars';

  openMenu() {
    this.menuValue = !this.menuValue;
    this.menuIcon = this.menuValue ? 'fa-solid fa-bars' : 'fa-solid fa-xmark';
  }

  closeMenu() {
    this.menuValue = false;
    this.menuIcon = 'fa-solid fa-bars';
  }
}
