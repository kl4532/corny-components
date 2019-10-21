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

// hideChildren version

// parent: HTMLElement;
// @Input() show: boolean;
// status: string;
// ngOnInit() {
//   this.parent = document.getElementsByTagName('hide-link')[0].parentElement;
//   console.log(this.show);
//   this.toggle();
//   console.log(this.parent);
// }

// toggle(){
//   for(let i = 0; i<this.parent.children.length -1; i++){
//     this.show ? (this.parent.children[i] as HTMLElement).style.display ="block" : (this.parent.children[i] as HTMLElement).style.display ="none";
//     this.show ? this.status ='Show less' : this.status = 'Show more';
//   }
//   this.show = !this.show;
//   console.log(this.show);
// }