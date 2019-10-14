import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss']
})
export class HamburgerMenuComponent implements OnInit {
  open: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  test(){
    if(this.open){
      document.getElementById("stripe2").style.transform = "rotate(-180deg)";
      document.getElementById("stripe4").style.transform = "rotate(180deg)";
      document.getElementById("stripe1").style.opacity = "1";
      document.getElementById("stripe3").style.opacity = "1";
      document.getElementById("menu").classList.toggle("visible", false);

      this.open = !this.open;
    }else{
      document.getElementById("stripe2").style.transform = "rotate(135deg)";
      document.getElementById("stripe4").style.transform = "rotate(-135deg)";
      document.getElementById("stripe1").style.opacity = "0";
      document.getElementById("stripe3").style.opacity = "0";
      document.getElementById("menu").classList.toggle("visible", true);

      this.open = !this.open;
    }


    
    
  }
}
