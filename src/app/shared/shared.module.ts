import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CsInputComponent } from './cs-input/cs-input.component';
import { FieldErrorsComponent } from './field-errors/field-errors.component';



@NgModule({
  declarations: [CsInputComponent, FieldErrorsComponent],
  imports: [
    CommonModule
  ],
  exports: [CsInputComponent]
})
export class SharedModule { }
