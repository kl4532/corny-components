import { Component, OnInit, Input } from '@angular/core';
import { HideLinkComponent } from '../hide-link/hide-link.component';

@Component({
  selector: 'tree-button',
  templateUrl: './tree-button.component.html',
  styleUrls: ['./tree-button.component.scss']
})
export class TreeButtonComponent implements OnInit {

  constructor() { }
  open: number;
  @Input() categories: Object[];
  ngOnInit() {
  }

  toggle(category, i) {
    const btn = document.getElementsByTagName('button')[i];
    this.open === category.id ? this.open = 0 : this.open = category.id;
    //need to fix +/- change
    // if(!this.open){
    //   // btn.innerHTML = "-";
    //   this.open = category.id;
    // }else {
    //   // btn.innerHTML = "+";
    //   this.open = 0;  
    // }
    // open ? btn.innerHTML = "-" : btn.innerHTML = "+"; 
  }

}
