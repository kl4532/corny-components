import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'c-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() btnType: string = "Button";
  @Input() text: string;
  @Input() disabled: boolean = false;

  constructor() {}

  ngOnInit() {
    this.text = this.text || this.btnType;
  }

  generic() {}

}
