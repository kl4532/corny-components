import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'c-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() options = [];
  @Input() filter = false;
  selected = "--select";
  open = false;
  
  constructor() {}

  ngOnInit() {}
  
}
