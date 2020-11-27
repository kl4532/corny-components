import {Component, OnInit, Input} from '@angular/core';
import { Chip } from '../../models/chip';


@Component({
  selector: 'c-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {

  @Input() options: Chip[];
  @Input() disabled: false;

  constructor() {}

  focusedChip: HTMLElement;

  ngOnInit(): void {}

}
