import { Component, OnInit} from '@angular/core';
import { Book } from 'src/app/_models/book';
import { BookService } from 'src/app/services/book-service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{


constructor(public bkServices:BookService){}
bookId=1;
bookList:Book[]=[];
ngOnInit(): void {
  this.bkServices.GetAll().subscribe(data=>{
    this.bookList=data
  })
}
Delete(bookId: number) {
  this.bkServices.DeleteById(bookId).subscribe(() => {
    // Refresh the book list after successful deletion
    this.bkServices.GetAll().subscribe(data => {
      this.bookList = data;
    });
  });
}


}

