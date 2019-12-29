import { NgModule } from '@angular/core';

import { CornyComponentsComponent } from './corny-components.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';
import { HideLinkComponent } from './hide-link/hide-link.component';


import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TreeButtonComponent } from './tree-button/tree-button.component';



@NgModule({
  declarations: [CornyComponentsComponent, SearchbarComponent, HamburgerMenuComponent, HideLinkComponent, TreeButtonComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
  ],
  exports: [CornyComponentsComponent]
})
export class CornyComponentsModule { }
