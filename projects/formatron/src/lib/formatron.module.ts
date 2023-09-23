import { NgModule } from '@angular/core';
import { FormatronComponent } from './formatron.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    FormatronComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    FormatronComponent
  ]
})
export class FormatronModule { }
