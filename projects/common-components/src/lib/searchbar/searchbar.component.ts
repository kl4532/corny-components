import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';



@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  @Input() placeholder;
  @Output() value = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
    let el = document.querySelector('input');
    typeof this.placeholder !== 'undefined' ? el.placeholder = this.placeholder : el.placeholder = "";
  }
  emitText(){
    this.value.emit(document.querySelector('input').value);
  }
}
