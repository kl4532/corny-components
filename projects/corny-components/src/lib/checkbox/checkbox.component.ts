import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'c-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  constructor() {}

  @Input() selected: boolean = false;
  @Input() val: string;
  @Input() labelPosition: string = 'right';
  ngOnInit() {}
  
}

