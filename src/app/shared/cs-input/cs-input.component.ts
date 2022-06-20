import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-cs-input',
  templateUrl: './cs-input.component.html',
  styleUrls: ['./cs-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CsInputComponent),
    multi: true
  }]
})
export class CsInputComponent implements ControlValueAccessor {

  @Input()
  public parentForm: FormGroup;

  @Input()
  public formControlName: string;

  @Input()
  public label: string;
  
  public value: string;
  public changed: (value: string) => void ;
  public touched:() => void;
  public isDisabled: boolean = false;

  constructor() { }
  
  get formField(): FormControl {
    return this.parentForm.get(this.formControlName) as FormControl;
  }
  writeValue(value: string): void {
    this.value = value;
  }

  onChange(event: Event): void {
    const value: string = (event.target as HTMLInputElement).value.toLocaleUpperCase();
    this.changed(value);
  }
  registerOnChange(fn: any): void {
    this.changed = fn;
  }
  registerOnTouched(fn: any): void {
    this.touched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;  }

}
