import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tree-button',
  templateUrl: './tree-button.component.html',
  styleUrls: ['./tree-button.component.scss']
})
export class TreeButtonComponent implements OnInit {

  open: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  toggle(i) {
    const btn = document.getElementsByTagName('button')[i];
    this.open = !this.open;
    this.open ? btn.innerText = "-" : btn.innerText = "+"; 
  }

 categories = [
      { 
        "id": "1",
        "name": "cat1-start", 
        "subcategory": [{
          "id": "1.1",
          "name": "sub1",
          "subcategory": [{
            "id": "1.1.1",
            "name": "sub1.1",
            "subcategory": [{
              "id": "1.1.1.1",
              "name": "sub1.1.1-last-child"
            }]
          }]
        }]
      },
  
      { 
        "id": "2",
        "name": "cat2", 
        "subcategory": [
        {
          "id": "2.1",
          "name": "sub1"
        },
        {
          "id": "2.2",
          "name": "sub2"
        },
        {
          "id": "2.3",
          "name": "sub3"
        }
        ]
      },
      
      { 
        "id": "3",
        "name": "cat3"
      },
      { 
        "id": "4",
        "name": "cat4"
      },
      { 
        "id": "5",
        "name": "cat5"
      },
      { 
        "id": "6",
        "name": "cat6"
      }
  ]

}
