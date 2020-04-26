import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'c-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() btnType: string = "button";
  @Input() text: string = this.btnType;
  // @Output() value = new EventEmitter<string>();
  // @Input() iconUrl: string;

  constructor() {}

  ngOnInit() {
  }

  generic() {

  }

}
