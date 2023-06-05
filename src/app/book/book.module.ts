import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookAddComponent } from './book-add/book-add.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BookRoutingModule } from './book-routing.module';
import { BookDetailsComponent } from './book-details/book-details.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BorrowServiceModule } from '../services/borrow-service.module';
import { PopUpComponent } from '../pop-up/pop-up.component';

@NgModule({
  declarations: [
    BookAddComponent,
    BookListComponent,
    BookDeleteComponent,
    BookDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BookRoutingModule,
    MatDialogModule,
    MatButtonModule,
    BorrowServiceModule,
  ],
  exports: [BookAddComponent, BookListComponent, BookDeleteComponent],
})
export class BookModule {}
