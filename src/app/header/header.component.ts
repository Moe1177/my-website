import { Component, ElementRef, ViewChild } from '@angular/core';
import { Offcanvas } from 'bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @ViewChild('navbarNav') navbarNavElement: ElementRef;
  private offcanvas: Offcanvas;

  constructor() {}

  ngAfterViewInit(): void {
    this.offcanvas = new Offcanvas(this.navbarNavElement.nativeElement);
  }

  closeOffcanvas(): void {
    this.offcanvas.hide();
  }

}