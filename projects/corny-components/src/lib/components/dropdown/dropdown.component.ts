import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'c-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() options = [];
  @Input() filter = false;
  selected = "-- select";
  open = false;
  childIndex=0;
  currentChild: HTMLElement;
  list: any;

  
  constructor(private element: ElementRef) {
  }

  ngOnInit() {
  }

  @HostListener('window:keydown', ['$event'])
  keyNavigation(event: KeyboardEvent) {
    this.list = this.element.nativeElement.querySelector("ul");
    if (event.key === "ArrowDown") {
      if(this.childIndex < this.options.length) {
        this.selected = this.options[this.childIndex];
        if(this.open) {
          this.list.children[this.childIndex].focus();
        }
        this.childIndex === this.options.length-1 ? null : this.childIndex++;
        console.log(this.childIndex);
      }
    }

    if (event.key === "ArrowUp") {
      if(this.childIndex > 0) {
        this.childIndex--;
        this.selected = this.options[this.childIndex];
        if(this.open) {
          this.list.children[this.childIndex].focus();
        }
      }
    }

    if (event.key === "Escape") {
      this.open = false;
      console.log("Esc pushed");
    }

    if (event.key === " ") {
      this.open = true;
      console.log("space pushed");
    }
  }
  
}
