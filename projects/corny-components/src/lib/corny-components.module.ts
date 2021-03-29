import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CornyComponentsComponent } from './corny-components.component';
import { ButtonComponent } from './components/button/button.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { TreeButtonComponent } from './components/tree-button/tree-button.component';
import { HideLinkComponent } from './components/hide-link/hide-link.component';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
// Imports addedByScript
import { ToolbarComponent }  from './components/toolbar/toolbar.component';
import { SelectButtonComponent }  from './components/selectButton/selectButton.component';
import { ProgressBarComponent }  from './components/progress-bar/progress-bar.component';
import { DropdownComponent }  from './components/dropdown/dropdown.component';
import { CButtonDirective } from './directives/c-button.directive';



@NgModule({
  declarations: [
    CornyComponentsComponent,
    SearchbarComponent,
    HideLinkComponent,
    TreeButtonComponent,
    ButtonComponent,
    CheckboxComponent,
    // Declarations addedByScript
ToolbarComponent,
SelectButtonComponent,
ProgressBarComponent,
DropdownComponent,
CButtonDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [CornyComponentsComponent],
})
export class CornyComponentsModule { }
