import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[cButton]'
})
export class CButtonDirective {

  @Input() public btnType: string = '';
  @Input() public disabled: boolean = false;

  @HostBinding('class.btn') btnClass = 'button';
  @HostBinding('class.btn-outlined')
  public get isOutlined(): boolean {
    return this.btnType === 'outlined';
  }
  @HostBinding('class.btn-text')
  public get isTextBtn(): boolean {
    return this.btnType === 'text';
  }

  constructor( private rend: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    this.rend.setAttribute(this.el.nativeElement, 'tabindex', "0");
    if(this.disabled) {
      this.rend.setProperty(this.el.nativeElement, 'disabled', true);
    }
  }

  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {

    if(event.key === "Enter") {
      event.preventDefault();
      return false;
    }

    if(event.key === " ") {
      this.toggleActive(true)
    }
  }

  @HostListener('keyup', ['$event'])
  onSpaceUp(event: KeyboardEvent) {
    if(event.key === " ") {
      this.toggleActive(false)
    }
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.toggleActive(true);
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    this.toggleActive(false);
  }

  toggleActive(flag: boolean) {
    if(flag) {
      this.rend.addClass(this.el.nativeElement, 'activated');
    } else {
      this.rend.removeClass(this.el.nativeElement, 'activated');
    }
  }

}
