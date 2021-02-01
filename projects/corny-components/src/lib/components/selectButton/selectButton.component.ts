import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

export const SELECTBUTTON_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectButtonComponent),
  multi: true
};

@Component({
  selector: 'c-selectButton',
  templateUrl: './selectButton.component.html',
  providers: [SELECTBUTTON_VALUE_ACCESSOR],
  styleUrls: ['./selectButton.component.scss']
})

export class SelectButtonComponent implements ControlValueAccessor, OnInit{

  @Input() options: any;

  @Input() disabled: boolean;

  @Output() onOptionClick: EventEmitter<any> = new EventEmitter();

  @Output() onChange: EventEmitter<any> = new EventEmitter();

  onModelChange: Function = () => {};

  onModelTouched: Function = () => {};

  multi: boolean;
  value: any;

  constructor(public cd: ChangeDetectorRef) {};

  ngOnInit() {
    this.value = [];
    this.options.map((option, i) => {
      option.selected ? this.value.push(option.name) : null;
    })

    this.onModelChange(this.value);

    this.onChange.emit({
      value: this.value
    });
  }

  writeValue(value: any): void {
    this.value = value;
    this.cd.markForCheck();
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

    this.onOptionClick.emit({
      originalEvent: event,
      option: option,
      index: i
    });

    this.onModelChange(this.value);

    this.onChange.emit({
      originalEvent: event,
      value: this.value
    });

  }

  removeOption(option: any): void {
    if(this.value) {
      this.value = this.value.filter(val => val !== option.name);
    }
  }

}
