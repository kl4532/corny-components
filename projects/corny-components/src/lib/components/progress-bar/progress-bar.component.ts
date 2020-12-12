import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'c-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit, OnChanges{

  inner: HTMLElement;
  @Input() value: number;
  /**
   *
   Two modes of ProgressBar are available:
   - determinate(default), value between 0 and 100 is be provided
   - indeterminate, when 'indeterminate' assigned to mode property
   */
  @Input() mode: string = 'determinate';
  @Output() finished = new EventEmitter<boolean>();

  constructor(private elem: ElementRef) {
  }

  ngOnInit(): void {
    if(this.mode === 'determinate') {
      this.inner = this.elem.nativeElement.querySelector('.inner');
      this.inner.style.width = this.value + '%';
    }
  }

  ngOnChanges() {
    console.log('mode', this.mode);
    if(this.mode === 'determinate') {
      this.inner = this.elem.nativeElement.querySelector('.inner');
      if(this.value<0) {
        this.value = 0;
      }

      if(this.value>100) {
        this.value = 100;
      }
      this.inner.style.width = this.value + '%';
    }

  }

}
