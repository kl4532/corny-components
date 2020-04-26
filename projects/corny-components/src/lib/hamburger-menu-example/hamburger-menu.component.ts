import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss']
})
export class HamburgerMenuComponent implements OnInit {
  open: boolean = false;
  constructor() { }

  ngOnInit() {
    if(typeof this.hcolor !== 'undefined'){
      let el = (document.getElementsByClassName('hamburger')[0])as HTMLElement;
      el.style.backgroundColor=(this.hcolor);
    }
    if(typeof this.hstripes !== 'undefined'){
      for(let i = 1; i<5; i++){
      document.getElementById('s'+ i).style.backgroundColor=(this.hstripes);
      }
    }
    
  }
  @Input('hcolor') hcolor: string;
  @Input('hstripes') hstripes: string;
  @Output() visible = new EventEmitter<boolean>();

  toggle(){
    if(this.open){
      document.getElementById("s2").style.transform = "rotate(-180deg)";
      document.getElementById("s3").style.transform = "rotate(180deg)";
      document.getElementById("s1").style.opacity = "1";
      document.getElementById("s4").style.opacity = "1";
      this.visible.emit(false);
      // document.getElementById("menu").classList.toggle("visible", false);
      this.open = !this.open;
    }else{
      document.getElementById("s2").style.transform = "rotate(135deg)";
      document.getElementById("s3").style.transform = "rotate(-135deg)";
      document.getElementById("s1").style.opacity = "0";
      document.getElementById("s4").style.opacity = "0";
      this.visible.emit(true);
      // document.getElementById("menu").classList.toggle("visible", true);
      this.open = !this.open;
    }
  }

}
