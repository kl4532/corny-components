import { NgModule } from '@angular/core';
import { CommonComponentsComponent } from './common-components.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';
import { HideLinkComponent } from './hide-link/hide-link.component';


import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [CommonComponentsComponent, SearchbarComponent, HamburgerMenuComponent, HideLinkComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
  ],
  exports: [CommonComponentsComponent]
})
export class CommonComponentsModule { }
