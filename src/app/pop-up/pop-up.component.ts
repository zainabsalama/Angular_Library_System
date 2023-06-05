import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BorrowBook } from '../_models/borrow-book';
import { Book } from '../_models/book';
import { BorrowServiceModule } from '../services/borrow-service.module';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css'],
})
export class PopUpComponent {
  form = new FormGroup({
    memberId: new FormControl<number>(0, [Validators.required]),
    numberOfCopies: new FormControl<number>(0, [
      Validators.required,
      Validators.max(this.data.numberOfCopies),
    ]),
  });
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: BorrowBook,
    public bkdService: BorrowServiceModule,
    public dialogRef: MatDialogRef<PopUpComponent>
  ) {}
  Send() {
    const book = new BorrowBook(
      this.data.bookId,
      this.form.controls.numberOfCopies.value!,
      this.form.controls.memberId.value!
    );
    this.bkdService.Add(book).subscribe((data) => {
      this.dialogRef.close();
    });
  }
}
