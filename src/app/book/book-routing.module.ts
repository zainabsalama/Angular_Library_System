import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { BookAddComponent } from './book-add/book-add.component';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';

const routes:Routes=[
  { path: '', redirectTo: 'book', pathMatch: 'full' },
  {path:"book",component:BookListComponent},
  {path:"details/:id", component:BookDetailsComponent},
  {path:"add",component:BookAddComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class BookRoutingModule { }
