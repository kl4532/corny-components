import { NgModule } from '@angular/core';

import { CornyComponentsComponent } from './corny-components.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';
import { HideLinkComponent } from './hide-link/hide-link.component';


import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [CornyComponentsComponent, SearchbarComponent, HamburgerMenuComponent, HideLinkComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
  ],
  exports: [CornyComponentsComponent]
})
export class CornyComponentsModule { }
