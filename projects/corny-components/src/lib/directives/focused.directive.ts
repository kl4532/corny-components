import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[c-focused]'
})
export class FocusedDirective {

  constructor() { }

  @HostBinding('style.color') color: string;
  @HostBinding('style.border-color') borderColor: string;
  @HostListener('focus') onFocus(){
    
  }

}
