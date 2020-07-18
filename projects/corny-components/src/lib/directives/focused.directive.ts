import { Directive, HostListener, HostBinding, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[c-focused]'
})
export class FocusedDirective {

  constructor(private rend: Renderer2, private el: ElementRef) { }

  @HostBinding('style.color') color: string;
  @HostBinding('style.border-color') borderColor: string;

  @HostListener('keyup', ['$event']) 
    triggerActive(event: KeyboardEvent) {
      if(event.key === "Enter" || event.key === " ") {
        this.toggleActive(true);
      }
    }
    
  toggleActive(flag: boolean) {
    if(flag) {
      this.el.nativeElement.click();
      // this.rend.addClass(this.el.nativeElement.children[0], 'activated');
    } else {
      this.el.nativeElement.click();
      // this.rend.removeClass(this.el.nativeElement.children[0], 'activated');
    }
  }

}
