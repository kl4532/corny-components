import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test-btn',
  templateUrl: './test-btn.component.html',
  styleUrls: ['./test-btn.component.scss']
})
export class TestBtnComponent implements OnInit {
  
  @Input() name: string;
  @Output() myEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
