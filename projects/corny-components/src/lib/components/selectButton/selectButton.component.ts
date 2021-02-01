import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'c-selectButton',
  templateUrl: './selectButton.component.html',
  styleUrls: ['./selectButton.component.scss']
})
export class SelectButtonComponent {

  @Input() options: any;

  @Input() disabled: boolean;

  @Output() onOptionClick: EventEmitter<any> = new EventEmitter();

  @Output() onChange: EventEmitter<any> = new EventEmitter();

  onModelChange: Function = () => {};

  onModelTouched: Function = () => {};

  value: any;
  valueChanged: boolean;

  constructor() {}

  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onModelTouched = fn;
  }
  setDisabledState(val: boolean): void {
    this.disabled = val;
  }

  itemClicked(event, option, i) {
    if(this.disabled) {
      return
    }

    if(!this.options[i].selected) {
      this.options[i].selected = true;
      this.value = [...(this.value||[]), option.name];
    } else {
      this.options[i].selected = false;
      this.removeOption(option);
    }
  }
  removeOption(option: any): void {
    this.value = this.value.filter(val => val !== option.name);
  }

  focusedChip: HTMLElement;
}
