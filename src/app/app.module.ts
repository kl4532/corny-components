import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestBtnComponent } from './test-btn/test-btn.component';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TestBtnComponent,
    HamburgerMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
