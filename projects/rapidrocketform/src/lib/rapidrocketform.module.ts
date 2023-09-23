import { NgModule } from '@angular/core';
import { RocketFormComponent } from './rapidrocketform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    RocketFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    RocketFormComponent
  ]
})
export class RapidRocketFormModule { }
