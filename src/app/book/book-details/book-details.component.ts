import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/_models/book';
import { BookService } from 'src/app/services/book-service';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from 'src/app/pop-up/pop-up.component';
import { BorrowBook } from 'src/app/_models/borrow-book';
import { BorrowServiceModule } from 'src/app/services/borrow-service.module';
import { RetreiveBook } from 'src/app/_models/retreive-book';
import { Router } from '@angular/router';
import { RetreiveBookModule } from 'src/app/services/retreive-book.module';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  detailsId: number = 1;
  sub: Subscription | null = null;
  book: Book | null = null;
  id = 0;
  borowedBook: BorrowBook = {
    bookId: 0,
    numberOfCopies: 0,
    memberId: 0,

  };
  retreivedBook: RetreiveBook = {
    bookCode: 0,
    bookTitle: 0,
    numberOfCopies: 0,
  };
  constructor(
    public bkService: BookService,
    public ac: ActivatedRoute,
    private dialog: MatDialog,
    public bkdService: BorrowServiceModule,
    public router:Router
    // public rtbService: RetreiveBookModule
  ) {}

  ngOnInit(): void {
    this.sub = this.ac.params.subscribe((data) => {
      this.id = data['id'];
      this.GetData();
    });
  }
  // GetAll() {
  //   this.rtbService.GetAll().subscribe((data) => {
  //     this.retreivedBook = data;
  //   });
  // }
  Borrow() {
    const borrowData: BorrowBook = {
      numberOfCopies: this.book!.numOfCopies,
      bookId: this.book!.id,
      memberId: this.borowedBook.memberId,
    };
    const dialogRef = this.dialog.open(PopUpComponent, {
      data: borrowData,
    });
    dialogRef.afterClosed().subscribe(result => {
      // this.GetData();
      this.router.navigateByUrl("/book");
    });
  }
  // Retreive() {
  //   this.bkdService.Retreive(this.retreivedBook.id).subscribe((data) => {});
  //   this.GetData();
  // }
  GetData() {
    this.bkService.ShowById(this.id).subscribe((r) => {
      this.book = r;
    });
  }
}
