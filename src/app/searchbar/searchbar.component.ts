import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  @Input() placeholder;

  constructor() {}

  ngOnInit() {
    console.log(this.placeholder);
    let el = document.getElementsByTagName('input')[0]
    typeof this.placeholder !== 'undefined' ? el.placeholder = this.placeholder : el.placeholder = "";
  }

}
