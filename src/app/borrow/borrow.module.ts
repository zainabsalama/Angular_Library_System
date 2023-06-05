import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorrowAddComponent } from './borrow-add/borrow-add.component';
import { BorrowBackComponent } from './borrow-back/borrow-back.component';



@NgModule({
  declarations: [
    BorrowAddComponent,
    BorrowBackComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BorrowModule { }
