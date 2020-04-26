import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CornyComponentsComponent } from './corny-components.component';
import { ButtonComponent } from './button/button.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { TreeButtonComponent } from './tree-button/tree-button.component';
import { HideLinkComponent } from './hide-link/hide-link.component';


@NgModule({
  declarations: [
    CornyComponentsComponent, 
    SearchbarComponent, 
    HideLinkComponent, 
    TreeButtonComponent,
    ButtonComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
  ],
  exports: [CornyComponentsComponent]
})
export class CornyComponentsModule { }
