import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { TestBtnComponent } from './test-btn/test-btn.component';
import { HideLinkComponent } from './hide-link/hide-link.component';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  components = [TestBtnComponent, HideLinkComponent, HamburgerMenuComponent];
  @ViewChild('container', {read: ViewContainerRef, static: true}) container: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
  }
}
