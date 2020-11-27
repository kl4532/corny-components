import { Component, OnInit, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'c-hide-link',
  templateUrl: './hide-link.component.html',
  styleUrls: ['./hide-link.component.scss']
})
export class HideLinkComponent implements OnInit {

  constructor(private rend: Renderer2) { }
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
