import { NgModule } from '@angular/core';
import { CommonComponentsComponent } from './common-components.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';
import { HideLinkComponent } from './hide-link/hide-link.component';



@NgModule({
  declarations: [CommonComponentsComponent, SearchbarComponent, HamburgerMenuComponent, HideLinkComponent],
  imports: [
  ],
  exports: [CommonComponentsComponent]
})
export class CommonComponentsModule { }
