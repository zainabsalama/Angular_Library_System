// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-pop-up-retreive',
//   templateUrl: './pop-up-retreive.component.html',
//   styleUrls: ['./pop-up-retreive.component.css']
// })
// export class PopUpRetreiveComponent {
//   form = new FormGroup({
//     memberId: new FormControl<number>(0, [Validators.required]),
//     numberOfCopies: new FormControl<number>(0, [
//       Validators.required,
//       Validators.max(this.data.numberOfCopies),
//     ]),
//   });
//   constructor(
//     @Inject(MAT_DIALOG_DATA) public data: BorrowBook,
//     public bkdService: BorrowServiceModule,
//     public dialogRef: MatDialogRef<PopUpComponent>
//   ) {}
//   Send() {
//     const book = new BorrowBook(
//       this.data.bookId,
//       this.form.controls.numberOfCopies.value!,
//       this.form.controls.memberId.value!
//     );
//     this.bkdService.Add(book).subscribe((data) => {
//       this.dialogRef.close();
//     });
//   }
// }
