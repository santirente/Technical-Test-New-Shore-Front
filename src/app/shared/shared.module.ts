import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [...MODULES],
})
export class SharedModule { }
