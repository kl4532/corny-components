import {Component, OnInit, Input, ElementRef, HostListener, Renderer2, HostBinding} from '@angular/core';

@Component({
  selector: 'c-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @HostBinding('class') class = 'someClass';

  @Input() btnType: string = "Button";
  @Input() text: string;
  @Input() disabled: boolean = false;

  constructor( private rend: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    this.text = this.text || this.btnType;
  }

  @HostListener('keydown', ['$event'])
    triggerActive(event: KeyboardEvent) {
      if(event.key === "Enter") {
        event.preventDefault();
        return false;
      }
  }

  toggleActive(flag: boolean) {
    if(flag) {
      this.rend.addClass(this.el.nativeElement.children[0], 'activated');
    } else {
      this.rend.removeClass(this.el.nativeElement.children[0], 'activated');
    }
  }

}
