import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'c-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() options = [];
  @Input() filter = false;
  @Input() selected = "-- select";
  open = false;
  childIndex=0;
  currentChild: HTMLElement;
  list: HTMLElement;
  inputFilter: string = "";
  optionsFiltered;

  constructor(private element: ElementRef) {
  }

  filterOptions() {
    this.optionsFiltered = this.options.filter(opt => opt.startsWith(this.inputFilter));
  }

  ngOnInit() {
    // NOT work TO FIX!
    const filter = this.element.nativeElement.querySelector("#input-filter");
    if(this.open && this.filter) {
      filter.focus();
    }
  }

  @HostListener('window:keydown', ['$event'])
  keyNavigation(event: KeyboardEvent) {
    this.list = this.element.nativeElement.querySelector("ul");
    if (event.key === "ArrowDown") {
      if(this.childIndex < this.options.length) {
        this.selected = this.options[this.childIndex];
        if(this.open) {
          (<HTMLElement>this.list.children[this.childIndex]).focus();
        }
        this.childIndex === this.options.length-1 ? null : this.childIndex++;
      }
    }

    if (event.key === "ArrowUp") {
      if(this.childIndex > 0) {
        this.childIndex--;
        this.selected = this.options[this.childIndex];
        if(this.open) {
          (<HTMLElement>this.list.children[this.childIndex]).focus();
        }
      }
    }

    if (event.key === "Escape") {
      this.open = false;
      this.element.nativeElement.querySelector(".ui-dropdown").focus();
    }

    if (event.key === " ") {
      this.open = true;
    }
  }
  
}
