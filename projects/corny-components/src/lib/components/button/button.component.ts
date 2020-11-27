import { Component, OnInit, Input, ElementRef, HostListener, Renderer2  } from '@angular/core';

@Component({
  selector: 'c-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() btnType: string = "Button";
  @Input() text: string;
  @Input() disabled: boolean = false;

  constructor( private rend: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    this.text = this.text || this.btnType;
  }


  //toFIX

  // @HostListener('mousedown', ['$event'])
  //   triggerMouseClick() {
  //     this.toggleActive(true);
  //   }
  // @HostListener('keydown', ['$event'])
  //   triggerActive(event: KeyboardEvent) {
  //     if(event.key === "Enter" || event.key === " ") {
  //       this.toggleActive(true);
  //     }
  //   }
  // @HostListener('mouseup', ['$event'])
  //   deactivateMouse() {
  //     this.toggleActive(false);
  //   }
  // @HostListener('keyup', ['$event'])
  //   triggerInactive(event: KeyboardEvent) {
  //     if(event.key === "Enter" || event.key === " ") {
  //       this.toggleActive(false);
  //     }
  // }

  toggleActive(flag: boolean) {
    if(flag) {
      this.rend.addClass(this.el.nativeElement.children[0], 'activated');
    } else {
      this.rend.removeClass(this.el.nativeElement.children[0], 'activated');
    }
  }

}
