import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hide-link',
  templateUrl: './hide-link.component.html',
  styleUrls: ['./hide-link.component.scss']
})
export class HideLinkComponent implements OnInit {

  constructor() { }
  @Input() show: boolean;
  @Input() toHide: string;
  element: HTMLElement;
  status: string;
  defDisplay: string;

  ngOnInit() {
    this.element = document.getElementById(this.toHide);
    this.defDisplay = this.element.style.display;
    this.toggle();
  }

  toggle(){
    if(!this.show){
      this.element.style.display = "none";
      this.status ='Show more ↓';
    }else {
      this.element.style.display = this.defDisplay;
      this.status = 'Show less ↑';  
    }
    this.show = !this.show;
  }

}
