import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';



@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  @Input() placeholder: string;
  @Output() value = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
    const input = document.querySelector('input');
    typeof this.placeholder !== 'undefined' ? input.placeholder = this.placeholder : input.placeholder = "";
  }

  emitText(){
    this.value.emit(document.querySelector('input').value);
  }
}
