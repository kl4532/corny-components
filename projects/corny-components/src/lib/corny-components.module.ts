import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CornyComponentsComponent } from './corny-components.component';
import { ButtonComponent } from './button/button.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { TreeButtonComponent } from './tree-button/tree-button.component';
import { HideLinkComponent } from './hide-link/hide-link.component';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox/checkbox.component';
// Imports addedByScript



@NgModule({
  declarations: [
    CornyComponentsComponent, 
    SearchbarComponent, 
    HideLinkComponent, 
    TreeButtonComponent,
    ButtonComponent,
    CheckboxComponent,
    // Declarations addedByScript
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [CornyComponentsComponent]
})
export class CornyComponentsModule { }
