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

  toggle(category) {
    this.open === category.id ? this.open = 0 : this.open = category.id;
  }

}
