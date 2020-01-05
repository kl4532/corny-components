import { Component, OnInit, Input } from '@angular/core';
import { HideLinkComponent } from '../hide-link/hide-link.component';

@Component({
  selector: 'tree-button',
  templateUrl: './tree-button.component.html',
  styleUrls: ['./tree-button.component.scss']
})
export class TreeButtonComponent implements OnInit {

  constructor() { }
  // open = false;
  @Input() categories;
  ngOnInit() {
  }

  toggle(category, i) {
    const btn = document.getElementsByTagName('button')[i];
    // if(!this.open){
    //   btn.innerHTML = "-";
    //   this.open = true;
    // }else {
    //   btn.innerHTML = "+";
    //   this.open = false;  
    // }
    // open ? btn.innerHTML = "-" : btn.innerHTML = "+"; 
  }

}
